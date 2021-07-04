package com.example.sigamobile.controllers;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.sigamobile.R;
import com.example.sigamobile.views.MainMenu;
import com.example.sigamobile.websercives.HttpRequests;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;

public class LoginViewController {
    private final Context context;

    public LoginViewController(Context context){
        this.context = context;
    }

    public void close(ImageView imageView){
        imageView.setOnClickListener(v -> ((Activity) context).finish());
    }

    public void login(Button button, EditText user, EditText password){
        FutureCallback loginCallbback = (e, result) -> {
            JsonObject jsonObject = (JsonObject) result;

            if (jsonObject.get("token").getAsString().equals("") || jsonObject.isJsonNull()){
                Toast.makeText(
                        context,
                        context.getString(R.string.login_fail),
                        Toast.LENGTH_SHORT)
                        .show();
            } else {
                Intent intent = new Intent(context, MainMenu.class);
                intent.putExtra("token", jsonObject.get("token").toString());
                context.startActivity(intent);
                ((Activity)context).finish();
            }
        };

        button.setOnClickListener(v -> HttpRequests.apiSigaLogin(
                context,
                loginCallbback,
                user.getText().toString(),
                password.getText().toString()
        ));
    }

    public void firstAccess(TextView textView){

    }

    public void passwordForget(TextView textView){

    }

    public void setTitleView(TextView titleView){
        titleView.setText(context.getString(R.string.title_login_view));
    }

}