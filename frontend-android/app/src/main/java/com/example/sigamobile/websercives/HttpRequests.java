package com.example.sigamobile.websercives;

import android.content.Context;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

public class HttpRequests {

    public static void apiExemploGet(Context context, String token, FutureCallback callback){
        String route = "exemplo.com.br/rota-api";
        Ion.with(context)
                .load(route)
                .setHeader("Authorization", "Bearer seutokenaqui")
                .asJsonObject()
                .setCallback(callback);
    }

    public static void apiExemploPost(Context context, String token, FutureCallback callback, String param){
        String route = "exemplo.com.br/rota-api";
        JsonObject json = new JsonObject();
        json.addProperty("termo", param);
        Ion.with(context)
                .load(route)
                .setHeader("Authorization", "Bearer seutokenaqui")
                .setJsonObjectBody(json)
                .asJsonObject()
                .setCallback(callback);
    }
}
