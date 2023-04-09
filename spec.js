describe("cs262 assignment2", function () {
  it("test 1", async function () {
    user = "consult";
    pass = "consult";
    var refNO = "1214334214";
    const EC = protractor.ExpectedConditions;
    await browser.get("http://twms.twss.co.th:8080/twms-dashboard/#/dashboard");
    await browser.driver.manage().window().maximize();
    await browser.waitForAngular();
    //login
    //input username
    var username = element(by.id("i_username"));
    await browser.wait(EC.visibilityOf(username), 10000);
    await username.sendKeys(user);
    //input password
    var password = element(by.id("i_password"));
    await browser.wait(EC.visibilityOf(password), 10000);
    await password.sendKeys(pass);
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
    await browser.wait(EC.visibilityOf(salesOrder), 10000);
    await salesOrder.click();
    //2.click SO and
    var saleorderbtn = element(by.id("i_create_item"));
    await browser.wait(EC.visibilityOf(saleorderbtn), 10000);
    await saleorderbtn.click();
    //3.
    //test1
    var check = element(by.xpath('//*[@id="tabstrip-2"]/form/div[1]/div/span/button[3]'));
    await browser.wait(EC.visibilityOf(check), 10000);
    expect(check.getText()).toEqual("Save&Confirm");
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
    //test 4.1 be false because this enable after client not a customer
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
    var ref = element(by.id("i_ref_doc_insert"));
    await browser.wait(EC.visibilityOf(ref), 10000);
    await ref.sendKeys(refNO);
    //5
    var createLineItemButton = element(by.id("i_create_line_item"));
    await browser.wait(EC.visibilityOf(createLineItemButton), 10000);
    await createLineItemButton.click();
    //productcode
    //5.a
    var productcode = element(by.name("productcode"));
    await browser.wait(EC.visibilityOf(productcode), 10000);
    await productcode.sendKeys("1000070");
    var productoption = element(
      by.xpath("/html/body/div[19]/div/div[2]/ul/li/span")
    );
    await browser.wait(EC.visibilityOf(productoption), 10000);
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
    await browser.wait(EC.visibilityOf(updatebtn), 10000);
    await updatebtn.click();
    //7
    var saveconfirm = element(by.cssContainingText("button", "Save&Confirm"));
    await browser.wait(EC.visibilityOf(saveconfirm), 10000);
    await saveconfirm.click();
    //8
    await browser.wait(EC.alertIsPresent(), 5000);
    await browser.switchTo().alert().accept();
    await browser.refresh();

    var i_ref_doc_number = element(by.id("i_ref_doc_number"));
    await browser.wait(EC.visibilityOf(i_ref_doc_number), 10000);
    await i_ref_doc_number.sendKeys(refNO);
    var searchbtn = element(
      by.xpath('//*[@id="tabstrip-1"]/form/div[5]/button')
    );
    await browser.wait(EC.visibilityOf(searchbtn), 10000);
    await searchbtn.click();
        //testcase 5
    var howmany = element(by.xpath('//*[@id="itemGridOptions"]/div[4]/span'));
    await browser.wait(EC.visibilityOf(howmany), 10000);
    expect(howmany.getText()).toEqual("1 - 1 of 1 items");
    var s_no_bpartner = element(by.id("s_no_bpartner"));
    await browser.wait(EC.visibilityOf(s_no_bpartner), 10000);
    await s_no_bpartner.click();
    await searchbtn.click();
    //testcase 6
    expect(howmany.getText()).toEqual("No items to display");
    //testcase 7.1 7.2
    expect(element(by.id("shiptosearch")).isEnabled()).toBe(true);
    expect(s_no_bpartner.isEnabled()).toBe(true);
    await browser.refresh();
    //test8
    //input Ref Doc No.
    var ref = element(by.id("i_ref_doc_number"));
    await browser.wait(EC.visibilityOf(ref), 10000);
    await ref.sendKeys(refNO);
    //Status slect to INITIAL
    var Statusselect = element(
      by.xpath('//*[@id="tabstrip-1"]/form/div[2]/div[4]/span')
    );
    await browser.wait(EC.visibilityOf(Statusselect), 10000);
    await Statusselect.click();
    var Statusoption = element(by.xpath('//*[@id="i_status_listbox"]/li[4]'));
    await browser.wait(EC.visibilityOf(Statusoption), 10000);
    await Statusoption.click();
    //clcik search
    var search = element(by.xpath('//*[@id="tabstrip-1"]/form/div[5]/button'));
    await browser.wait(EC.visibilityOf(search), 10000);
    await search.click();
    expect(
      element(
        by.xpath('//*[@id="itemGridOptions"]/div[3]/table/tbody/tr[1]/td[6]')
      ).getText()
    ).toBe(refNO);
    //9 logout
    var userprofile = element(by.css(".user-profile.dropdown-toggle"));
    await browser.wait(EC.visibilityOf(userprofile), 10000);
    await userprofile.click();
    var dropdownMenu = element(by.css(".dropdown-menu.dropdown-usermenu"));
    var logoutbtn = dropdownMenu.all(by.css("li")).last();
    await browser.wait(EC.visibilityOf(logoutbtn), 10000);
    await logoutbtn.click();
  });
});
