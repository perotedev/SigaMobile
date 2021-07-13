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

        controller.setTitleView(findViewById(R.id.toolbar_title));
        controller.close(findViewById(R.id.btn_close_toolbar));
        controller.passwordForget(findViewById(R.id.password_forget));
        controller.login(
                findViewById(R.id.btn_login),
                findViewById(R.id.edit_text_user),
                findViewById(R.id.edit_text_password)
        );
        controller.firstAccess(findViewById(R.id.firt_access));
    }
}
