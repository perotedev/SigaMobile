package com.example.sigamobile.controllers;

import android.content.Context;
import android.view.View;
import android.widget.TextView;
import com.example.sigamobile.R;
import com.example.sigamobile.models.Student;

public class SplashViewController {
    private Context context;

    public SplashViewController(Context context){
        this.context = context;
    }

//    public void textEdit(TextView textView){
//        textView.setText(R.string.texto);
//    }
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