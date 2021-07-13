package com.example.sigamobile.views;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.example.sigamobile.R;
import com.example.sigamobile.controllers.CreateUserController;

public class CreateUserView extends AppCompatActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_user);
        CreateUserController controller = new CreateUserController(this);

        controller.createUser(
                findViewById(R.id.btn_create_user),
                findViewById(R.id.edit_text_username),
                findViewById(R.id.edit_text_password_hash)
        );
        controller.goBack(findViewById(R.id.btn_back_create_user));
        controller.setTitleView(findViewById(R.id.toolbar_title));
    }
}
