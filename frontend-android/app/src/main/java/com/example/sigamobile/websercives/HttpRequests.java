package com.example.sigamobile.websercives;

import android.content.Context;
import android.util.Log;
import com.example.sigamobile.R;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

public class HttpRequests {

    public static void apiSigaLogin(Context context, FutureCallback callback, String username, String password){
        String route = context.getString(R.string.base_url)+context.getString(R.string.api_login_route);
        JsonObject json = new JsonObject();
        json.addProperty("username", username);
        json.addProperty("password", password);
        Ion.with(context)
                .load(route)
                .setLogging("API_LOGIN", Log.DEBUG)
                .setHeader("Content-Type", "application/json")
                .setJsonObjectBody(json)
                .asJsonObject()
                .setCallback(callback);
    }

    public static void apiCheckRegistration(Context context, FutureCallback callback, String registration, String rg){
        String route = context.getString(R.string.base_url)+context.getString(R.string.api_check_registration);
        JsonObject json = new JsonObject();
        json.addProperty("registration", registration);
        json.addProperty("rg", rg);
        Ion.with(context)
                .load(route)
                .setLogging("API_CHECK_REGISTRATION", Log.DEBUG)
                .setHeader("Content-Type", "application/json")
                .setJsonObjectBody(json)
                .asJsonObject()
                .setCallback(callback);
    }

    public static void apiCreateUser(Context context, FutureCallback callback, String username, String password, String studantId){
        String route = context.getString(R.string.base_url)+context.getString(R.string.api_users_route);
        JsonObject json = new JsonObject();
        json.addProperty("username", username);
        json.addProperty("passwordHash", password);
        json.addProperty("studantId", studantId);
        Ion.with(context)
                .load(route)
                .setLogging("API_CREATE_USER", Log.DEBUG)
                .setHeader("Content-Type", "application/json")
                .setJsonObjectBody(json)
                .asJsonObject()
                .setCallback(callback);
    }

//    public static void apiExemploGet(Context context, String token, FutureCallback callback){
//        String route = "exemplo.com.br/rota-api";
//        Ion.with(context)
//                .load(route)
//                .setHeader("Authorization", "Bearer seutokenaqui")
//                .asJsonObject()
//                .setCallback(callback);
//    }
//
//    public static void apiExemploPost(Context context, String token, FutureCallback callback, String param){
//        String route = "exemplo.com.br/rota-api";
//        JsonObject json = new JsonObject();
//        json.addProperty("termo", param);
//        Ion.with(context)
//                .load(route)
//                .setHeader("Authorization", "Bearer seutokenaqui")
//                .setJsonObjectBody(json)
//                .asJsonObject()
//                .setCallback(callback);
//    }
}
