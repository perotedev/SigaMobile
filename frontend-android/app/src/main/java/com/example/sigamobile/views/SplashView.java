package com.example.sigamobile.views;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.example.sigamobile.R;

public class SplashView extends AppCompatActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_view);

        Intent intent = new Intent(getApplicationContext(), LoginView.class);
        Thread splashScreenStarter = new Thread() {
            public void run() {
                try {
                    int delay = 0;
                    while (delay < 1000) {
                        sleep(150);
                        delay = delay + 100;
                    }
                    startActivity(intent);

                } catch (InterruptedException e) {
                    e.printStackTrace();

                } finally {
                    finish();
                }
            }

        };
        splashScreenStarter.start();

//        controller.textEdit(findViewById(R.id.title_splash));
//        controller.buttomContinue(findViewById(R.id.title_splash));
    }

}
