describe("rules", function () {

  it('should have the basic instructions written', function () {
    browser.get('/rules');
    expect($('#instructions').getText()).toMatch('test');
  });

  it('should have the images of the cards available', function () {
    browser.get('/rules');
    villager = element(by.css("img[src*='villager.jpg']"));
    expect((villager).isPresent()).toBe(true);
  });

  it('should be able to click on the cards', function () {
    browser.get('/rules');
    werewolf = element(by.css("img[src*='werewolf.jpg']"));
    werewolf.click();
    expect($('#selected-title')).toEqual('Werewolf');
  });



});