package com.example.sigamobile.views;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import com.example.sigamobile.R;
import com.example.sigamobile.controllers.LoginViewController;
import com.example.sigamobile.controllers.MainMenuController;

public class MainMenu extends AppCompatActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_menu);
        MainMenuController mainMenuController = new MainMenuController(this);

        mainMenuController.setTitleView(findViewById(R.id.toolbar_title));
    }
}
