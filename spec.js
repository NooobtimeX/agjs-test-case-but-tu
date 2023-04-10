describe("cs262 assignment2", function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 400000;
  it("test 1", async function () {
    //get Current Date
    const time = new Date();
    const day = time.getDate().toString().padStart(2, "0");
    const month = (time.getMonth() + 1).toString().padStart(2, "0");
    const year = time.getFullYear().toString();
    const currentDate = `${day}/${month}/${year}`;

    //define
    var user = "consult";
    var pass = "consult";
    var refNO = "122245ed";
    const EC = protractor.ExpectedConditions;

    //get website
    await browser.get("http://twms.twss.co.th:8080/twms-dashboard/#/dashboard");
    await browser.driver.manage().window().maximize();
    await browser.waitForAngular();

    //login
    var username = element(by.id("i_username"));
    var password = element(by.id("i_password"));
    var loginbtn = element(by.tagName("button"));
    await browser.wait(EC.visibilityOf(username), 10000);
    await browser.wait(EC.visibilityOf(password), 10000);
    await browser.wait(EC.visibilityOf(loginbtn), 10000);
    await username.sendKeys(user);
    await password.sendKeys(pass);
    browser.sleep(500);
    await loginbtn.click();
    browser.sleep(500);

    //Test Case 1 : Check if login is succeed
    var realname = element(by.css('[ng-show="hasRealName()"]'));
    await browser.wait(EC.visibilityOf(realname), 10000);
    expect(realname.getText()).toEqual("Consult Derive");
    browser.sleep(500);

    //Basic Flow 1.1 : Click Outbound
    var outbound = element(by.id("sidebar-menu"));
    await browser.wait(EC.visibilityOf(outbound), 10000);
    await outbound.click();
    browser.sleep(500);

    //Basic Flow 1.2 : Click Sales Orders
    var salesOrder = element.all(by.cssContainingText("a", "Sales Orders"));
    await browser.wait(EC.visibilityOf(salesOrder.first()), 10000);
    await salesOrder.first().click();
    browser.sleep(500);

    //Basic Flow 2 : Click create SO
    var saleorderbtn = element(by.id("i_create_item"));
    await browser.wait(EC.visibilityOf(saleorderbtn), 10000);
    await saleorderbtn.click();
    browser.sleep(500);

    //Basic Flow 3 : The system displays a new sales order form.
    var check = element(
      by.xpath('//*[@id="tabstrip-2"]/form/div[1]/div/span/button[3]')
    );
    await browser.wait(EC.visibilityOf(check), 10000).then(function () {
      console.log("show");
    });
    browser.sleep(500);

    //Test Case 2.1 : Client's Customer should disable
    expect(element(by.id("i_customer_insert")).isEnabled()).toBe(false);
    browser.sleep(500);

    //Basic Flow 4.a : Select client to open SO
    var clientslect = element(
      by.xpath('//*[@id="tabstrip-2"]/form/div[3]/div[1]/div/span[1]/span[1]')
    );
    await browser.wait(EC.visibilityOf(clientslect), 10000);
    await clientslect.click();
    var clientoptioon = element(by.xpath('//*[@id="i_client_listbox"]/li[2]'));
    await browser.wait(EC.visibilityOf(clientoptioon), 10000);
    await clientoptioon.click();
    browser.sleep(500);

    //Test Case 2.2 : Client's Customer should enable
    expect(element(by.id("i_customer_insert")).isEnabled()).toBe(true);
    browser.sleep(500);

    //Test Case 3.1 : Client's Ship To Address should disable
    expect(
      await element(
        by.xpath('//*[@id="tabstrip-2"]/form/div[5]/div[1]/div/span[1]')
      ).getAttribute("aria-disabled")
    ).toBe("true");
    browser.sleep(500);

    //Test Case 4.1 : Client's Shipping Method should disable
    //?????
    expect(
      await element(
        by.xpath('//*[@id="tabstrip-2"]/form/div[3]/div[2]/div/span')
      ).getAttribute("aria-disabled")
    ).toBe("true");
    browser.sleep(500);

    //Basic Flow 4.b : Input customer data
    var customerinput = element(by.id("i_customer_insert"));
    await browser.wait(EC.visibilityOf(customerinput), 10000);
    await customerinput.sendKeys("10009670");
    var customeroption = element(
      by.xpath('//*[@id="i_customer_insert_listbox"]/li')
    );
    await browser.wait(EC.visibilityOf(customeroption), 10000);
    await customeroption.click();
    browser.sleep(500);

    //Test Case 3.2 : Client's Ship To Address should enable
    expect(
      await element(
        by.xpath('//*[@id="tabstrip-2"]/form/div[5]/div[1]/div/span[1]')
      ).getAttribute("aria-disabled")
    ).toBe("false");
    browser.sleep(500);

    //Test Case 4.2 : Client's Shipping Method should enable
    expect(
      await element(
        by.xpath('//*[@id="tabstrip-2"]/form/div[3]/div[2]/div/span')
      ).getAttribute("aria-disabled")
    ).toBe("false");
    browser.sleep(500);

    //Basic Flow 4.c : Select Ship To Address to open SO
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
    browser.sleep(500);

    //Basic Flow 4.d
    //Basic Flow 4.e Input Request Date
    var request_date_insert = element(by.id("i_request_date_insert"));
    await browser.wait(EC.visibilityOf(request_date_insert), 10000);
    await request_date_insert.sendKeys(currentDate);
    browser.sleep(500);

    //Basic Flow 4.f Input So Date
    var document_date = element(by.id("i_document_date"));
    await browser.wait(EC.visibilityOf(document_date), 10000);
    await document_date.sendKeys(currentDate);
    browser.sleep(500);

    //Basic Flow 4.g h i : Input Ref Doc No
    var ref = element(by.id("i_ref_doc_insert"));
    await browser.wait(EC.visibilityOf(ref), 10000);
    await ref.sendKeys(refNO);
    browser.sleep(500);

    //Basic Flow 5 : Clcick create line item
    var createLineItemButton = element(by.id("i_create_line_item"));
    await browser.wait(EC.visibilityOf(createLineItemButton), 10000);
    await createLineItemButton.click();
    browser.sleep(500);

    //Basic Flow 5.a :Input productcode
    var productcode = element(by.name("productcode"));
    await browser.wait(EC.visibilityOf(productcode), 10000);
    await productcode.sendKeys("1000070");
    var productoption = element(
      by.xpath("/html/body/div[19]/div/div[2]/ul/li/span")
    );
    await browser.wait(EC.visibilityOf(productoption), 10000);
    await productoption.click();
    browser.sleep(500);

    //Basic Flow 5.b : Input Qty
    var qty = element(
      by.xpath(
        '//*[@id="i_lineitem_grid"]/table/tbody/tr/td[4]/span/span/input[1]'
      )
    );
    await browser.wait(EC.visibilityOf(qty), 10000);
    await qty.sendKeys(5);
    browser.sleep(500);

    //Basic Flow 5.c : Select SU
    var seselect = element(
      by.xpath('//*[@id="i_lineitem_grid"]/table/tbody/tr/td[5]/span')
    );
    await browser.wait(EC.visibilityOf(seselect), 10000);
    await seselect.click();
    var seoption = element(by.xpath("/html/body/div[20]/div/div[2]/ul"));
    await browser.wait(EC.visibilityOf(seoption), 10000);
    await seoption.click();
    browser.sleep(500);

    //Basic Flow 6 : Click Update button
    var updatebtn = element(by.cssContainingText("a", "Update"));
    await browser.wait(EC.visibilityOf(updatebtn), 10000);
    await updatebtn.click();
    browser.sleep(500);

    //Basic Flow 7 : Click Save&Confirm
    var saveconfirm = element(by.cssContainingText("button", "Save&Confirm"));
    await browser.wait(EC.visibilityOf(saveconfirm), 10000);
    await saveconfirm.click();
    browser.sleep(500);

    //Basic Flow 8 : Click OK from alert box
    await browser.wait(EC.alertIsPresent(), 5000);
    await browser.switchTo().alert().accept();
    await browser.refresh();
    browser.sleep(500);

    //Test Case 5 : The system check SO number auto generate unique number
    var i_ref_doc_number = element(by.id("i_ref_doc_number"));
    await browser.wait(EC.visibilityOf(i_ref_doc_number), 10000);
    await i_ref_doc_number.sendKeys(refNO);
    var searchbtn = element(
      by.xpath('//*[@id="tabstrip-1"]/form/div[5]/button')
    );
    await browser.wait(EC.visibilityOf(searchbtn), 10000);
    await searchbtn.click();
    var howmany = element(by.xpath('//*[@id="itemGridOptions"]/div[4]/span'));
    await browser.wait(EC.visibilityOf(howmany), 10000);
    expect(howmany.getText()).toEqual("1 - 1 of 1 items");
    browser.sleep(500);

    //Test Case 6 : Product displayed must belong to that client only.
    var refs = element(
      by.xpath('//*[@id="itemGridOptions"]/div[3]/table/tbody/tr[1]/td[6]')
    );
    await browser.wait(EC.visibilityOf(refs), 10000);
    expect(refs.getText()).toBe(refNO);
    browser.sleep(500);

    //Test Case 7: User can select Sale Order from pair of client m_shipper_id and b_partner
    var checkbox = element(by.id("chkSearchAllRow"));
    await browser.wait(EC.visibilityOf(checkbox), 10000);
    expect(checkbox.isEnabled()).toBe(true);
    browser.sleep(500);

    //Test Case 8 : Verify customer as a bpartner exclusive to this client.
    var s_no_bpartner = element(by.id("s_no_bpartner"));
    await browser.wait(EC.visibilityOf(s_no_bpartner), 10000);
    await s_no_bpartner.click();
    await searchbtn.click();
    expect(howmany.getText()).toEqual("No items to display");
    browser.sleep(500);

    //Basic Flow 9 : logout
    var userprofile = element(by.css(".user-profile.dropdown-toggle"));
    await browser.wait(EC.visibilityOf(userprofile), 10000);
    await userprofile.click();
    var dropdownMenu = element(by.css(".dropdown-menu.dropdown-usermenu"));
    var logoutbtn = dropdownMenu.all(by.css("li")).last();
    await browser.wait(EC.visibilityOf(logoutbtn), 10000);
    await logoutbtn.click();
    browser.sleep(3000);
    
  });
});
