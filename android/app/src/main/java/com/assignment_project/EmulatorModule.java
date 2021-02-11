package com.assignment_project;

import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import android.os.Build;

public class EmulatorModule extends ReactContextBaseJavaModule {
    //constructor
    public EmulatorModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "EmulatorModule";
    }

    //Custom function that we are going to export to JS
    @ReactMethod(isBlockingSynchronousMethod = true)
    public Boolean isEmulator() {
        String product = Build.PRODUCT;

        if (product != null) {
          return product.equals("sdk") || product.contains("_sdk") || product.contains("sdk_");
        }
        return false;
    }
}
