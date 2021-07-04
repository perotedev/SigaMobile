package com.example.sigamobile.views;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.example.sigamobile.R;
import com.example.sigamobile.controllers.LoginViewController;

public class LoginView extends AppCompatActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_view);
        LoginViewController controller = new LoginViewController(this);

        controller.close(findViewById(R.id.btn_close_toolbar));
        controller.setTitleView(findViewById(R.id.toolbar_title));

    }
}
