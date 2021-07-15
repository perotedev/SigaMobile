package com.example.sigamobile.websercives;

import android.app.Application;

public class HostDefinition extends Application {
    private String localIp;

    public String getLocalIp(){
        return localIp;
    }

    public void setLocalIp(String localIp){
        this.localIp = localIp;
    }
}
