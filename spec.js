describe("cs262 assignment2", function () {
  it("test 1", async function () {
    const EC = protractor.ExpectedConditions;
    await browser.get("http://twms.twss.co.th:8080/twms-dashboard/#/dashboard");
    await browser.driver.manage().window().maximize();
    await browser.waitForAngular();
    //login
    //input username
    var username = element(by.id("i_username"));
    await browser.wait(EC.visibilityOf(username), 10000);
    await username.sendKeys("consult");
    //input password
    var password = element(by.id("i_password"));
    await browser.wait(EC.visibilityOf(password), 10000);
    await password.sendKeys("consult");
    // click login button
    var loginbtn = element(by.tagName("button"));
    await browser.wait(EC.visibilityOf(loginbtn), 10000);
    await loginbtn.click();
    //1.1 click Outbound
    var outbound = element(by.id("sidebar-menu"));
    await browser.wait(EC.visibilityOf(outbound), 10000);
    await outbound.click();
    //1.2 click Sales Orders
    var salesOrder = element
      .all(by.cssContainingText("a", "Sales Orders"))
      .first();
    await browser.wait(EC.elementToBeClickable(salesOrder), 10000);
    await salesOrder.click();
    //2.click SO and 3.
    var saleorderbtn = element(by.id("i_create_item"));
    await browser.wait(EC.elementToBeClickable(saleorderbtn), 10000);
    await saleorderbtn.click();
    //test 2.1
    expect(element(by.id("i_customer_insert")).isEnabled()).toBe(false);
    //4.a
    var clientslect = element(
      by.xpath('//*[@id="tabstrip-2"]/form/div[3]/div[1]/div/span[1]/span[1]')
    );
    await browser.wait(EC.visibilityOf(clientslect), 10000);
    await clientslect.click();
    var clientoptioon = element(by.xpath('//*[@id="i_client_listbox"]/li[2]'));
    await browser.wait(EC.visibilityOf(clientoptioon), 10000);
    await clientoptioon.click();
    //test 2.2
    expect(element(by.id("i_customer_insert")).isEnabled()).toBe(true);
    //test 3.1
    expect(
      await element(
        by.xpath('//*[@id="tabstrip-2"]/form/div[5]/div[1]/div/span[1]')
      ).getAttribute("aria-disabled")
    ).toBe("true");
    //test 4.1
    expect(
      await element(
        by.xpath('//*[@id="tabstrip-2"]/form/div[3]/div[2]/div/span')
      ).getAttribute("aria-disabled")
    ).toBe("true");
    //4.b
    var customerinput = element(by.id("i_customer_insert"));
    await browser.wait(EC.visibilityOf(customerinput), 10000);
    await customerinput.sendKeys("10009670");
    var customeroption = element(
      by.xpath('//*[@id="i_customer_insert_listbox"]/li')
    );
    await browser.wait(EC.visibilityOf(customeroption), 10000);
    await customeroption.click();
    //test 3.2
    expect(
      await element(
        by.xpath('//*[@id="tabstrip-2"]/form/div[5]/div[1]/div/span[1]')
      ).getAttribute("aria-disabled")
    ).toBe("false");

    //test 4.2
    expect(
      await element(
        by.xpath('//*[@id="tabstrip-2"]/form/div[3]/div[2]/div/span')
      ).getAttribute("aria-disabled")
    ).toBe("false");
    //4.c
    var staselect = element(
      by.xpath('//*[@id="tabstrip-2"]/form/div[5]/div[1]/div/span[1]/span')
    );
    await browser.wait(EC.visibilityOf(staselect), 10000);
    await staselect.click();
    var staoption = element(
      by.xpath('//*[@id="i_shipto_address_insert_listbox"]/li[2]/span')
    );
    await browser.wait(EC.visibilityOf(staoption), 10000);
    await staoption.click();
    //4.d
    //4.e
    var request_date_insert = element(by.id("i_request_date_insert"));
    await browser.wait(EC.visibilityOf(request_date_insert), 10000);
    await request_date_insert.sendKeys("04/04/2023");
    //4.f
    var document_date = element(by.id("i_document_date"));
    await browser.wait(EC.visibilityOf(document_date), 10000);
    await document_date.sendKeys("01/04/2023");
    //4.g h i Ref Doc No
    var document_date = element(by.id("i_ref_doc_insert"));
    await browser.wait(EC.visibilityOf(document_date), 10000);
    await document_date.sendKeys("1");
    //5
    var createLineItemButton = element(by.id("i_create_line_item"));
    await browser.wait(EC.elementToBeClickable(createLineItemButton), 10000);
    await createLineItemButton.click();
    //productcode
    //5.a
    var productcode = element(by.name("productcode"));
    await browser.wait(EC.elementToBeClickable(productcode), 10000);
    await productcode.sendKeys("1000070");
    var productoption = element(
      by.xpath("/html/body/div[19]/div/div[2]/ul/li/span")
    );
    await browser.wait(EC.elementToBeClickable(productoption), 10000);
    await productoption.click();
    //5.b
    var qty = element(
      by.xpath(
        '//*[@id="i_lineitem_grid"]/table/tbody/tr/td[4]/span/span/input[1]'
      )
    );
    await browser.wait(EC.visibilityOf(qty), 10000);
    await qty.sendKeys(5);
    //5.c
    var seselect = element(
      by.xpath('//*[@id="i_lineitem_grid"]/table/tbody/tr/td[5]/span')
    );
    await browser.wait(EC.visibilityOf(seselect), 10000);
    await seselect.click();
    var seoption = element(by.xpath("/html/body/div[20]/div/div[2]/ul"));
    await browser.wait(EC.visibilityOf(seoption), 10000);
    await seoption.click();
    //6
    var updatebtn = element(by.cssContainingText("a", "Update"));
    await browser.wait(EC.elementToBeClickable(updatebtn), 10000);
    await updatebtn.click();
    //7
    var saveconfirm = element(by.cssContainingText("button", "Save&Confirm"));
    await browser.wait(EC.elementToBeClickable(saveconfirm), 10000);
    await saveconfirm.click();
    //8
    await browser.wait(EC.alertIsPresent(), 5000);
    await browser.switchTo().alert().accept();
    await browser.refresh();
    //testcase 5
    //testcase 6
    //testcase 7
    //testcase 8
    //9 logout
    var userprofile = element(by.css(".user-profile.dropdown-toggle"));
    await browser.wait(EC.elementToBeClickable(userprofile), 10000);
    await userprofile.click();
    await browser.sleep(1000);
    var dropdownMenu = element(by.css(".dropdown-menu.dropdown-usermenu"));
    var logoutbtn = dropdownMenu.all(by.css("li")).last();
    await browser.wait(EC.elementToBeClickable(logoutbtn), 10000);
    await logoutbtn.click();
    await browser.sleep(10000);
  });
});

