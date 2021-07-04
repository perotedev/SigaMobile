package com.example.sigamobile.views;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.example.sigamobile.R;
import com.example.sigamobile.controllers.SplashViewController;

public class SplashView extends AppCompatActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_view);
        SplashViewController controller = new SplashViewController(this);

//        controller.textEdit(findViewById(R.id.title_splash));
//        controller.buttomContinue(findViewById(R.id.title_splash));
    }

}
