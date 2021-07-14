package com.example.sigamobile.controllers;

import android.content.Context;
import android.widget.TextView;
import com.example.sigamobile.R;

public class MainMenuController {
    private Context context;

    public  MainMenuController (Context context){
        this.context = context;
    }

    public void setTitleView(TextView titleView){
        titleView.setText(context.getString(R.string.app_name));
    }
}
