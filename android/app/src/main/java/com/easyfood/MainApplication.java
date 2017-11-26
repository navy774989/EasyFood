package com.easyfood;

import android.app.Application;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactApplication;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.reactnativepayments.ReactNativePaymentsPackage;
import io.underscope.react.fbak.RNAccountKitPackage;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  // private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  //   @Override
  //   public boolean getUseDeveloperSupport() {
  //     return BuildConfig.DEBUG;
  //   }
     @Override
     public boolean isDebug() {
         // Make sure you are using BuildConfig from your own application
         return BuildConfig.DEBUG;
     }
         @Override
    public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }

    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RCTCameraPackage(),
            new ReactNativePaymentsPackage(),
            new RNAccountKitPackage(),
            new ReactNativeOneSignalPackage(),
            new MapsPackage()
      );
    }

  //   @Override
  //   protected String getJSMainModuleName() {
  //     return "index";
  //   }
  // };

  // @Override
  // public ReactNativeHost getReactNativeHost() {
  //   return mReactNativeHost;
  // }

  // @Override
  // public void onCreate() {
  //   super.onCreate();
  //   SoLoader.init(this, /* native exopackage */ false);
  // }
}
