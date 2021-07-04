package com.example.sigamobile.controllers;

import android.app.Activity;
import android.content.Context;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import com.example.sigamobile.R;

public class LoginViewController {
    private Context context;

    public LoginViewController(Context context){
        this.context = context;
    }

    public void close(ImageView imageView){
        imageView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ((Activity) context).finish();
            }
        });
    }

    public void login(Button button){

    }

    public void firstAccess(TextView textView){

    }

    public void passwordForget(TextView textView){

    }

    public void setTitleView(TextView titleView){
        titleView.setText(context.getString(R.string.title_login_view));
    }

}