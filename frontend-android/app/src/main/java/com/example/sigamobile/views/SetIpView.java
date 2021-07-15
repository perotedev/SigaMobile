package com.example.sigamobile.views;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.example.sigamobile.R;
import com.example.sigamobile.websercives.HostDefinition;

public class SetIpView extends AppCompatActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_set_ip_view);
        EditText pcIp = findViewById(R.id.edit_ip);
        ImageView btnExit = findViewById(R.id.ip_exit);
        Button btnContinue = findViewById(R.id.btn_ip_continue);

        btnExit.setOnClickListener(v -> finish());
        btnContinue.setOnClickListener(v -> {
            if (pcIp.getText().toString().equals("")){
                Toast.makeText(getApplicationContext(), "IP NÃO PODE SER VAZIO!", Toast.LENGTH_SHORT).show();
            } else {
                String ip = "http://"+pcIp.getText().toString()+":4040";
                ((HostDefinition)this.getApplication()).setLocalIp(ip);
                Intent intent = new Intent(getApplicationContext(), SplashView.class);
                startActivity(intent);
                finish();
            }
        });
    }
}
