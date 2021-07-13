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
import com.example.sigamobile.views.CheckRegistrationView;
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
            try {
                JsonObject jsonObject = (JsonObject) result;
                if (jsonObject.get("accessToken") != null) {
                    Intent intent = new Intent(context, MainMenu.class);
                    intent.putExtra("accessToken", jsonObject.get("accessToken").getAsString());
                    context.startActivity(intent);
//                    ((Activity)context).finish();
                } else {
                    Toast.makeText(
                            context,
                            context.getString(R.string.login_fail),
                            Toast.LENGTH_SHORT
                    ).show();
                }
            } catch (Exception exception){
                Toast.makeText(
                        context,
                        context.getString(R.string.no_internet),
                        Toast.LENGTH_SHORT
                ).show();
            }
        };

        button.setOnClickListener(v -> {
            if (user.getText().toString().equals("") || password.getText().toString().equals("")){
                Toast.makeText(
                        context,
                        context.getString(R.string.input_empty),
                        Toast.LENGTH_SHORT)
                        .show();
            } else {
                HttpRequests.apiSigaLogin(
                        context,
                        loginCallbback,
                        user.getText().toString(),
                        password.getText().toString()
                );
            }
        });
    }

    public void firstAccess(TextView textView){
        textView.setOnClickListener(v -> {
            Intent intent = new Intent(context, CheckRegistrationView.class);
            context.startActivity(intent);
        });
    }

    public void passwordForget(TextView textView){
        textView.setOnClickListener(v -> Toast.makeText(context, "FALTA IMPLEMENTAR", Toast.LENGTH_SHORT).show());
    }

    public void setTitleView(TextView titleView){
        titleView.setText(context.getString(R.string.title_login_view));
    }

}