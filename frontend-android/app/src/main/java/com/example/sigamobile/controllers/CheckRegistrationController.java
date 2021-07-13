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
import com.example.sigamobile.views.CreateUserView;
import com.example.sigamobile.websercives.HttpRequests;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;

public class CheckRegistrationController {
    private final Context context;

    public CheckRegistrationController(Context context){
        this.context = context;
    }

    public void validateStudant(Button btnCheck, EditText registration, EditText rg) {
        FutureCallback checkCallback = (e, result) -> {
            try {
                JsonObject jsonObject = (JsonObject) result;
                if (jsonObject.get("status").getAsString().equals("YES")) {
                    Intent intent = new Intent(context, CreateUserView.class);
                    intent.putExtra("studantId", jsonObject.get("studantId").getAsString());
                    context.startActivity(intent);
                    ((Activity)context).finish();
                } else {
                    Toast.makeText(
                            context,
                            context.getString(R.string.check_registration_fail),
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
            if (registration.getText().toString().equals("") || rg.getText().toString().equals("")) {
                Toast.makeText(
                        context,
                        context.getString(R.string.input_check_registration_empty),
                        Toast.LENGTH_SHORT
                ).show();
            } else {
                HttpRequests.apiCheckRegistration(
                        context,
                        checkCallback,
                        registration.getText().toString(),
                        rg.getText().toString()
                );
            }
        });

    }

    public void goBack(ImageView iconBack){
        iconBack.setOnClickListener(v -> ((Activity)context).finish());
    }

    public void setTitleView(TextView titleView){
        titleView.setText(context.getString(R.string.new_user_title));
    }
}
