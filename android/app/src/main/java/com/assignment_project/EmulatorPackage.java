package com.assignment_project;

import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import java.util.Collections;
import java.util.Arrays;
import java.util.List;

public class EmulatorPackage implements ReactPackage  {
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new com.assignment_project.EmulatorModule(reactContext)
        );
    }
}
