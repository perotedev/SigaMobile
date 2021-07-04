package com.example.sigamobile.controllers;

import android.app.Activity;
import android.content.Context;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.sigamobile.R;

public class LoginViewController {
    private Context context;

    public LoginViewController(Context context){
        this.context = context;
    }

    public void close(ImageView close){
        close.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ((Activity) context).finish();
            }
        });
    }

    public void setTitleView(TextView titleView){
        titleView.setText(context.getString(R.string.title_login_view));
    }
//
//    public void buttomContinue(TextView textView){
//        textView.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                Student student = new Student();
//                student.setName(context.getString(R.string.studant_name_test));
//                textView.setText(student.getName());
//            }
//        });
//    }
}