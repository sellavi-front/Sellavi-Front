document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('.custom_section');
  if (root !== null) {
    root.innerHTML = '<constructor ' +
      ':tiers-structures="tiersStructures" ' +
      ':tastes="tastes" ' +
      ':fillings="fillings" ' +
      ':selected-properties="selectedProperties" ' +
      ':forms="forms" ' +
      ':covers="covers"' +
      ':toppings="toppings"' +
      ':berries="berries" ' +
      ':decors="decors"' +
      ':active-selectors="activeSelectors"' +
      ':berrie-price="berriePrice"' +
      ':decor-price="decorPrice"' +
      '@select-property="selectProperty"' +
      '@activate-selector="activateSelector"' +
      '@add-features="addFeatures"' +
      '@save-and-buy="saveAndBuy"></constructor>'
  }
});