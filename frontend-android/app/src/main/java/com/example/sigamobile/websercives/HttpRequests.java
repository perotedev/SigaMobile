package com.example.sigamobile.websercives;

import android.content.Context;

import com.example.sigamobile.R;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

public class HttpRequests {

    public static void apiSigaLogin(Context context, FutureCallback callback, String param1, String param2){
        String route = context.getString(R.string.base_url)+context.getString(R.string.api_login_route);
        JsonObject json = new JsonObject();
        json.addProperty("user", param1);
        json.addProperty("password", param2);
        Ion.with(context)
                .load(route)
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
