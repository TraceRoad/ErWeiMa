package com.test;

import java.io.File; 
import java.util.Hashtable; 
   
import com.google.zxing.BarcodeFormat; 
import com.google.zxing.EncodeHintType; 
import com.google.zxing.MultiFormatWriter; 
import com.google.zxing.common.BitMatrix; 
import com.intumit.MatrixToImageWriter;
   
public class Test { 
   
    /**
     * @param args
     * @throws Exception 
     */ 
    public static void main(String[] args) throws Exception { 
        String text = "http://192.168.7.39:8080/ErWeiMa/"; 
        int width = 300; 
        int height = 300; 
        //��ά���ͼƬ��ʽ 
        String format = "png"; 
        Hashtable hints = new Hashtable(); 
        //������ʹ�ñ��� 
        hints.put(EncodeHintType.CHARACTER_SET, "utf-8"); 
        File img1 = new File("D:"+File.separator+"welintech.jpg");  
        BitMatrix bitMatrix = new MultiFormatWriter().encode(text, 
                BarcodeFormat.QR_CODE, width, height, hints); 
        //���ɶ�ά�� 
        File outputFile = new File("d:"+File.separator+"new.png"); 
        MatrixToImageWriter.writeToFile(bitMatrix, format, outputFile); 
    }
  } 
