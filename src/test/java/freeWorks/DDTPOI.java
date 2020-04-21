package freeWorks;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;

public class DDTPOI {
    public static void main(String[] args) throws IOException {

        FileInputStream fis = new FileInputStream("C://Users//KD1114//Desktop//Demodata.xls");
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        int numberOfSheet = workbook.getNumberOfSheets();
        for(int i = 0; i<numberOfSheet; i++) {
            if (workbook.getSheetName(i).equalsIgnoreCase("TestData")) {
                XSSFSheet sheet = workbook.getSheetAt(i);


                // Identify tast cases column by scanning the entire 1st row

                Iterator<Row> rows = sheet.iterator(); // sheet is collection of rows
            }
        }
    }
}
