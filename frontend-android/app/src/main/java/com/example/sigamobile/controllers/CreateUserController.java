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

public class CreateUserController {
    private final Context context;

    public CreateUserController(Context context){
        this.context = context;
    }

    public void createUser(Button btnCheck, EditText username, EditText password) {
        FutureCallback newUserCallback = (e, result) -> {
            try {
                JsonObject jsonObject = (JsonObject) result;
                if (jsonObject.get("_id") != null) {
                    Toast.makeText(
                            context,
                            context.getString(R.string.create_user_success),
                            Toast.LENGTH_SHORT
                    ).show();
                    login(
                        username.getText().toString(),
                        password.getText().toString()
                    );
                } else {
                    Toast.makeText(
                            context,
                            context.getString(R.string.create_user_fail),
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

        btnCheck.setOnClickListener(v -> {
            if (username.getText().toString().equals("") || password.getText().toString().equals("")) {
                Toast.makeText(
                        context,
                        context.getString(R.string.input_create_user_empty),
                        Toast.LENGTH_SHORT
                ).show();
            } else {
                HttpRequests.apiCreateUser(
                        context,
                        newUserCallback,
                        username.getText().toString(),
                        password.getText().toString(),
                        ((Activity)context).getIntent().getStringExtra("studantId")
                );
            }
        });

    }

    private void login(String user, String password){
        FutureCallback loginCallback = (e, result) -> {
            try {
                JsonObject jsonObject = (JsonObject) result;
                if (jsonObject.get("accessToken") != null) {
                    Intent intent = new Intent(context, MainMenu.class);
                    intent.putExtra("accessToken", jsonObject.get("accessToken").getAsString());
                    context.startActivity(intent);
                    ((Activity)context).finish();
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

        HttpRequests.apiSigaLogin(
                context,
                loginCallback,
                user,
                password
        );
    }

    public void goBack(ImageView iconBack){
        iconBack.setOnClickListener(v -> ((Activity)context).finish());
    }

    public void setTitleView(TextView titleView){
        titleView.setText(context.getString(R.string.new_user_title));
    }
}
