package com.example.sigamobile.views;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.example.sigamobile.R;
import com.example.sigamobile.controllers.CheckRegistrationController;

public class CheckRegistrationView extends AppCompatActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_check_registration);
        CheckRegistrationController controller = new CheckRegistrationController(this);

        controller.validateStudant(
                findViewById(R.id.btn_check_registration),
                findViewById(R.id.edit_text_registration),
                findViewById(R.id.edit_text_rg)
        );
        controller.goBack(findViewById(R.id.btn_back_check_registration));
        controller.setTitleView(findViewById(R.id.toolbar_title));
    }
}
