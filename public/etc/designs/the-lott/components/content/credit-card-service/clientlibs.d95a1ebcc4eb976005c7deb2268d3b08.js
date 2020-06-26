/* credit-card-service-prod-aem-v1.2.890 */
define("text!service/credit-card-deposit/credit-card-base-view.html", ["module"], function(e) {
    e.exports = '<template><div class="credit-card-base-view"><div class="row min-height"><div class="columns body-padding-columns"></div><div class="columns dialog-content"><div show.bind="!formReady" class="loading-container"><div class="row align-center"><loading-spinner class="align-self-middle"></loading-spinner></div></div><div show.bind="!model.aboutToBeSuspended"><compose if.bind="formType" ref="formTemplate" view-model="service/credit-card-deposit/form-templates/${formType}" model.bind="model.params" form-loaded.delegate="formLoadedEvent($event)" form-unloaded.delegate="formUnloadedEvent($event)" finalise-submit.delegate="finaliseRequest($event)" cancel-clicked.delegate="cancel($event)" show-form-header-error.delegate="showFormHeaderError($event)" hide-form-header-error.delegate="hideFormHeaderError()" show-form-response-error.delegate="showFormResponseError($event)" update-title.delegate="updateTitle($event)" spend-limit-exceeded.delegate="triggerSpendLimitExceeded($event)" vaulted-unknown-error.delegate="showVaultedUnknownError($event)" model-suspended.delegate="updateModelSuspended($event)" containerless></compose></div><div show.bind="model.aboutToBeSuspended"><div class="row action-button-row align-center"><div class="columns"><button class="button button-action" click.delegate="cancel()" type="button"><span class="${spinnerClass}">OKAY</span></button></div></div></div><div class="bottom-row"></div></div><div class="columns body-padding-columns"></div></div></div></template>'
}), define("text!service/credit-card-deposit/container-templates/account-dialog/account-dialog.html", ["module"], function(e) {
    e.exports = '<template><require from="./account-dialog.css"></require><div show.bind="!model.formResponseError && !isUnverifiedError" class="credit-card-account-dialog"><ux-dialog><ux-dialog-header if.bind="!model.formHeaderError"><div class="row xsmall-collapse header-row"><button if.bind="!hideCloseIcon" type="button" class="custom-dialog-close" aria-label="Close" click.trigger="controller.cancel()" data-test-id="account-deposit-close-button"><span aria-hidden="true">×</span></button><div class="columns body-padding-columns"></div><div class="columns dialog-content"><div class="row align-center dialog-header-row"><div class="nominate-card-dialog-icon ${dialogIcon}"></div><div class="columns shrink dialog-card-title text-center ${title && title.length > 18 ? \'reduce-font-size\' : \'\'}" data-test-id="dialog-card-title">${title}</div></div><div if.bind="subtitle" class="row text-center"><div class="columns dialog-card-subtitle">${subtitle}</div></div></div><div class="columns body-padding-columns"></div></div></ux-dialog-header><ux-dialog-header if.bind="model.formHeaderError" class="dialog-header-error"><div class="row xsmall-collapse header-row"><button if.bind="!hideCloseIcon" type="button" class="custom-dialog-close" aria-label="Close" click.trigger="controller.cancel()" data-test-id="account-deposit-close-button"><span aria-hidden="true">×</span></button><div class="columns body-padding-columns"></div><div class="columns dialog-content"><div class="row"><div class="columns header-error text-center"><div class="columns shrink header-icon float-center ${model.formHeaderError.uxClass}"></div><div class="header-title" data-test-id="credit-card-error-title">${model.formHeaderError.title}</div><div class="header-message" innerhtml.bind="model.formHeaderError.message" data-test-id="credit-card-error-message"></div></div></div></div><div class="columns body-padding-columns"></div></div></ux-dialog-header><ux-dialog-body><credit-card-base-view update-title.delegate="updateTitle($event)" model.bind="model" title.bind="title" subtitle.bind="subtitle" is-unverified-error.bind="isUnverifiedError"></credit-card-base-view></ux-dialog-body></ux-dialog></div><user-unverified-warning if.bind="isUnverifiedError" dialog-back.call="back($event)"></user-unverified-warning></template>'
}), define("text!service/credit-card-deposit/container-templates/inline-deposit-dialog/inline-deposit-dialog.html", ["module"], function(e) {
    e.exports = '<template><div show.bind="!model.formResponseError && (!creditCardView.spendLimitExceeded || creditCardView.userOverriddenLimit) && !creditCardView.vaultedUnknownError &&!isUnverifiedError" class="credit-card-account-dialog"><ux-dialog data-test-id="deposit-dialog"><ux-dialog-header if.bind="!model.formHeaderError" class="dialog-header-notification" data-test-id="credit-card-notification"><div class="row xsmall-collapse header-row"><button type="button" class="custom-dialog-close" aria-label="Close" click.trigger="controller.cancel()" data-test-id="inline-deposit-close-button"><span aria-hidden="true">×</span></button><div class="columns body-padding-columns"></div><div class="columns dialog-content"><div class="row"><div class="columns shrink header-icon"></div><div class="columns header-notification"><div class="header-title" data-test-id="credit-card-header-title">Insufficient Funds</div><div class="header-message" data-test-id="credit-card-header-message">Please deposit the required funds using your preferred payment method.</div></div></div></div><div class="columns body-padding-columns"></div></div></ux-dialog-header><ux-dialog-header if.bind="model.formHeaderError" class="dialog-header-error"><div class="row xsmall-collapse header-row"><button type="button" class="custom-dialog-close" aria-label="Close" click.trigger="controller.cancel()" data-test-id="inline-deposit-close-button"><span aria-hidden="true">×</span></button><div class="columns body-padding-columns"></div><div class="columns dialog-content"><div class="row"><div class="columns header-error text-center"><div class="columns shrink header-icon float-center ${model.formHeaderError.uxClass}"></div><div class="header-title" data-test-id="credit-card-error-title">${model.formHeaderError.title}</div><div class="header-message" innerhtml.bind="model.formHeaderError.message" data-test-id="credit-card-error-message"></div></div></div></div><div class="columns body-padding-columns"></div></div></ux-dialog-header><ux-dialog-body><credit-card-base-view view-model.ref="creditCardView" model.bind="model" is-unverified-error.bind="isUnverifiedError"></credit-card-base-view></ux-dialog-body></ux-dialog></div><generic-error-dialog if.bind="model.formResponseError && model.formResponseError === true" class="credit-card-error"></generic-error-dialog><generic-error-dialog if.bind="model.formResponseError && model.formResponseError !== true" dialog-back.call="back($event)" class="credit-card-error"></generic-error-dialog><deposit-limit-warning if.bind="creditCardView.spendLimitExceeded && !creditCardView.userOverriddenLimit" continue-action.two-way="creditCardView.userOverriddenLimit" back-action.two-way="creditCardView.spendLimitExceeded" spend-limit-message.two-way="creditCardView.spendLimitMessage" class="credit-card-error"></deposit-limit-warning><paypal-unknown-error if.bind="creditCardView.vaultedUnknownError" error-message.two-way="creditCardView.vaultedUnknownErrorMessage" continue-action.call="controller.cancel()" class="unknown-error"></paypal-unknown-error><user-unverified-warning if.bind="isUnverifiedError" dialog-back.call="back($event)"></user-unverified-warning></template>'
}), define("text!service/credit-card-deposit/form-field-templates/card-cvv/card-cvv.html", ["module"], function(e) {
    e.exports = '<template><div><div class="row cvv-text-row"><div class="columns text-left">CVV</div></div><div class="row cvv-selection-row" validation-errors.bind="cvvErrors"><div class="columns xsmall-4 cvv-input-row"><input pattern="[0-9]*" id="${model.edit ? \'security-code-edit\' : \'security-code\'}" readonly="readonly" type="number" class="input-cvv-tokenised" value.bind="model.cvv & validate"></div><div if.bind="model.updateVisible && !model.hideContinue" class="columns xsmall-8 button-column"><button class="button-save button" click.delegate="inlineUpdateSubmitted()" type="button" data-test-id="save-button"><span class="${spinnerClass}">SAVE</span></button></div><div class="columns xsmall-12"><div class="help-text" show.bind="cvvErrors.length > 0"><span repeat.for="cvvErrorInfo of cvvErrors">${cvvErrorInfo.error.message}</span></div></div></div><div if.bind="model.updateVisible && model.hideContinue" class="row action-button-row align-center"><div class="columns"><button class="button button-action" click.delegate="inlineUpdateSubmitted()" type="button" data-test-id="save-button"><span class="${spinnerClass}">SAVE</span></button></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/card-details/card-details.html", ["module"], function(e) {
    e.exports = '<template><div if.bind="!!card" class="row align-center align-middle credit-card-details-row"><div class="columns shrink ${card.CardType.toLowerCase()}-icon"></div><div class="columns shrink separator-column"></div><div class="columns shrink card-number">${formattedCardNumber}</div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/card-number/card-number.html", ["module"], function(e) {
    e.exports = '<template><div class="row card-number-text-row"><div class="columns text-left">Card Number</div></div><div class="row card-number-selection-row" validation-errors.bind="cardNumberErrors"><div class="columns xsmall-12 card-number-input-row"><input pattern="[0-9]*" id="card-number" readonly="readonly" type="number" class="input-card-number-tokenised" value.bind="model.cardNumber & validate"></div><div class="columns xsmall-12"><div class="help-text" show.bind="cardNumberErrors.length > 0"><span repeat.for="cardNumberErrorInfo of cardNumberErrors">${cardNumberErrorInfo.error.message}</span></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/card-selector/card-selector.html", ["module"], function(e) {
    e.exports = '<template><require from="../../converters/card-number-format"></require><div><div class="row credit-card-text-row"><div if.bind="hideName !== true" class="columns text-left">${cardDisplayName}</div><div if.bind="model.showUpdateLink" class="columns text-right"><span class="${model.preventFormChanges ? \'link-not-allowed\' : \'\'}"><span class="update-card-link ${model.preventFormChanges ? \'link-disabled\' : \'\'}" click.delegate="toggleUpdateSection()" data-test-id="update-card-link">${model.updateVisible ? \'Cancel\' : \'Update\'}</span></span></div></div><div class="row credit-card-selection-row" validation-errors.bind="selectedCardErrors"><div class="columns ${model.preventFormChanges ? \'select-not-allowed\' : \'\'}"><select onblur="window.scrollTo(0,0)" disabled.bind="model.preventFormChanges" class="select-card ${!model.selectedCard ? \'select-no-option\' : \'\'} first-option-disabled" change.delegate="cardChoice($event.target.value)" value.bind="model.selectedCard & validateOnBlur" data-test-id="select-card"><option class="defaultOption" value="">Select a card</option><option repeat.for="card of model.cards" model.bind="card">${card.CardType} ${card.CardNumber | cardNumberFormat}</option><option value="Visa">New Visa</option><option value="MasterCard">New Mastercard</option></select><div class="help-text" show.bind="selectedCardErrors.length > 0"><span repeat.for="selectedCardErrorInfo of selectedCardErrors">${selectedCardErrorInfo.error.message}</span></div></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/deposit-amount/deposit-amount.html", ["module"], function(e) {
    e.exports = '<template><div><div class="row amount-text-row"><div class="columns text-left">${label}</div></div><div class="row amount-selection-row" validation-errors.bind="depositAmountErrors"><div class="currency-symbol">$</div><div class="columns"><input pattern="[0-9.]*" type="number" class="input-amount" value.bind="model.depositAmount & validateOnChangeOrBlur" ref="inputAmount" data-test-id="input-amount"><div class="help-text not-error" show.bind="depositAmountErrors.length === 0 && model.showHelpText"><span>Deposit amount must be at least $${model.minDepositAmount.toFixed(2)}</span></div><div class="help-text" show.bind="depositAmountErrors.length > 0"><span repeat.for="depositAmountErrorInfo of depositAmountErrors">${depositAmountErrorInfo.error.message}</span></div></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/disclaimer-text/disclaimer-text.html", ["module"], function(e) {
    e.exports = '<template><div class="row note-row"><div class="columns text-left"><b>Note:</b> Deposits via credit card may be considered as a cash advance by the issuer of your card and attract additional charges. Contact your financial institution for further information.</div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/expiry-date/expiry-date.html", ["module"], function(e) {
    e.exports = '<template><div class="change-expiry"><div class="row expiry-text-row"><div class="columns text-left">${expiryDateLabel}</div></div><div class="row expiry-selection-row"><div class="columns"><div class="row"><div class="columns selection-column"><select onblur="window.scrollTo(0,0)" id="${model.edit ? \'expiry-month-edit\' : \'expiry-month\'}" readonly="readonly" class="select-month ${model.selectedMonth === \'\' ? \'select-no-option\' : \'\'} first-option-disabled" value.bind="model.selectedMonth" change.delegate="monthChanged()" data-test-id="expiry-month"><option class="defaultOption" value="">MM</option><option repeat.for="option of months" model.bind="option" disabled.bind="option.disabled">${option.name}</option></select></div><div class="columns separator-column"></div><div class="columns selection-column"><select onblur="window.scrollTo(0,0)" id="${model.edit ? \'expiry-year-edit\' : \'expiry-year\'}" readonly="readonly" class="select-year ${model.selectedYear === \'\' ? \'select-no-option\' : \'\'} first-option-disabled" value.bind="model.selectedYear" change.delegate="yearChanged()" data-test-id="expiry-year"><option value="">YYYY</option><option repeat.for="i of 31" model.bind="currentYear + i">${currentYear + i}</option></select></div></div></div></div><div class="row" show.bind="!!selectedMonthErrors"><div class="columns xsmall-12"><div class="help-text"><span>Please enter a valid Expiry Date</span></div></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/paypal-deposit-button/paypal-deposit-button.html", ["module"], function(e) {
    e.exports = '<template><require from="./paypal-deposit-button.css"></require><div class="paypal paypal-container content-center register-container" data-test-id="deposit-paypal"><loading-spinner if.bind="!paypalEnabled && !scriptError" class="paypal-spinner" data-test-id="deposit-paypal-spinner" size="medium"></loading-spinner><div show.bind="paypalEnabled && !scriptError" id="paypal-deposit-button" data-test-id="deposit-paypal-button"></div><div if.bind="scriptError" class="paypal-notification" data-test-id="deposit-paypal-error-notification"><div class="paypal-notification-message"><div class="paypal-notification-icon paypal-notification-icon--error"></div><span>PayPal is currently unavailable. Refresh the page shortly to try again.</span></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/radio-card-selector/radio-card-selector.html", ["module"], function(e) {
    e.exports = '<template><require from="../../converters/card-number-format"></require><require from="elements/radio-button/radio-button"></require><require from="elements/editable-form/editable-form-saved-indicator/editable-form-saved-indicator"></require><require from="./radio-card-selector.css"></require><div><div class="row credit-card-selection-row" validation-errors.bind="selectedCardErrors"><div class="columns ${model.preventFormChanges ? \'select-not-allowed\' : \'\'}"><div class="columns dialog-content"><div class="text-left method-padding">Payment method</div><div repeat.for="card of model.cards"><radio-button data-test-id="card-selector-${card.CardType.toLowerCase()}" if.bind="card.CardType === \'MasterCard\' || card.CardType === \'Visa\'" class="card-row editable" name="cardSelector" model.bind="card" checked.bind="model.selectedCard"><div data-test-id="card-selector-${card.CardType.toLowerCase()}-icon" class="card-type icon-${card.CardType === \'Visa\' ? \'visa\' : \'mastercard\'}"></div><span data-test-id="card-selector-description" class="card-description">${card.CardNumber | cardNumberFormat}</span><editable-form-saved-indicator if.bind="card === model.selectedCard" class="card-edit card-saved-indicator ${card === model.selectedCard && card.Expired === false ? \'\' : \'hide\'}" view-model.ref="saveIndicator"><button class="hyperlink-button" type="button" click.delegate="toggleEdit(card)" data-test-id="toggle-edit-button">${card.Editing ? \'Cancel\' : \'Edit\'}</button></editable-form-saved-indicator></radio-button><div if.bind="card === model.selectedCard && (card.Editing === true || card.Expired === true)"><update-credit-card id="update-credit-card" expired.bind="card.Expired === true ? true : false" model.bind="model.updateCreditCard" view-model.ref="updateCreditCardVm"></update-credit-card></div><radio-button data-test-id="card-selector-${card.CardType.toLowerCase()}" if.bind="card.CardType === \'PayPal\'" class="card-row editable" name="cardSelector" model.bind="card" checked.bind="model.selectedCard"><div data-test-id="card-selector-paypal-icon" class="card-type icon-paypal"></div><span data-test-id="card-selector-description" class="card-description"><span data-test-id="card-selector-description-paypal">${card.CardType} ${card.Email ? \'(\' : \'\'}</span> <span data-test-id="card-selector-description-paypal-email" class="paypal-email-truncated">${card.Email ? card.Email : \'\'}</span> <span>${card.Email ? \')\' : \'\'}</span></span></radio-button><radio-button data-test-id="card-selector-new-${card.toLowerCase()}" if.bind="card === \'Mastercard\' || card === \'Visa\'" class="card-row editable" show.bind="showMoreOptions || allVisible" name="cardSelector" model.bind="card" checked.bind="model.selectedCard"><div data-test-id="card-selector-new-${card.toLowerCase()}-icon" class="card-type icon-${card === \'Visa\' ? \'visa\' : \'mastercard\'}"></div><span data-test-id="card-selector-description" class="card-description">New ${card}</span></radio-button></div><div if.bind="!allVisible" class="more-options" data-test-id="options-section"><a click.delegate="toggleMoreOptions()" data-test-id="${showMoreOptions ? \'less-options\' : \'more-options\'}">${showMoreOptions ? \'Less options\' : \'More options\'}</a> <span class="toggle ${showMoreOptions ? \'on\' : \'off\'}"></span></div><div class="help-text" show.bind="selectedCardErrors.length > 0"><span repeat.for="selectedCardErrorInfo of selectedCardErrors">${selectedCardErrorInfo.error.message}</span></div></div></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-field-templates/update-credit-card/update-credit-card.html", ["module"], function(e) {
    e.exports = '<template><require from="elements/loading-button/loading-button"></require><i class="fa fa-2x fa-caret-up update-card-caret"></i><div class="update-credit-card"><div show.bind="expired === true" class="row expired-message" data-test-id="expired-message"><strong>This card has expired.</strong><hr class="expired-hr"></div><div class="row expiry-text-row"><div class="columns text-left">New expiry date</div><div class="columns text-right cvv-label">CVV</div></div><div class="row expiry-selection-row"><div class="columns"><div class="row"><div class="columns selection-column"><select onblur="window.scrollTo(0,0)" id="expiry-month-edit" readonly="readonly" class="select-month ${model.selectedMonth === \'\' ? \'select-no-option\' : \'\'} first-option-disabled input-expiry-month-inline" value.bind="model.selectedMonth" change.delegate="monthChanged()" data-test-id="expiry-month"><option class="defaultOption" value="">MM</option><option repeat.for="option of months" model.bind="option" disabled.bind="option.disabled">${option.name}</option></select></div><div class="columns year-seperator"></div><div class="columns selection-column"><select onblur="window.scrollTo(0,0)" id="expiry-year-edit" readonly="readonly" class="select-year ${model.selectedYear === \'\' ? \'select-no-option\' : \'\'} first-option-disabled input-expiry-year-inline" value.bind="model.selectedYear" change.delegate="yearChanged()" data-test-id="expiry-year"><option value="">YYYY</option><option repeat.for="i of 31" model.bind="currentYear + i">${currentYear + i}</option></select></div><div class="columns separator-column"></div><div class="columns cvv-input-row inline-cvv" validation-errors.bind="cvvErrors"><input pattern="[0-9]*" id="security-code-edit" readonly="readonly" type="number" class="input-cvv-inline" value.bind="model.cvv & validate"></div></div></div></div><div class="row" show.bind="!!selectedMonthErrors || cvvErrors.length > 0"><div class="columns xsmall-12"><div class="help-text"><span>Please enter a valid Expiry Date and CVV</span></div></div></div><div class="row action-button-row align-center"><div class="columns button-section"><loading-button style.bind="\'save-button hollow button-action\'" data-test-id="save-button" button-clicked.call="save()">SAVE</loading-button></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-templates/add-deposit-form/add-deposit-form.html", ["module"], function(e) {
    e.exports = '<template><card-selector card-changed.delegate="onSelectedCardChanged($event)" model.bind="model.cardSelector" view-model.ref="cardSelectorVm"></card-selector><card-number model.bind="model.cardNumber" view-model.ref="cardNumberVm"></card-number><expiry-date model.bind="model.expiryDate" view-model.ref="expiryDateVm"></expiry-date><card-cvv model.bind="model.cardCvv" view-model.ref="cardCvvVm"></card-cvv><deposit-amount model.bind="model.depositAmount" view-model.ref="depositAmountVm"></deposit-amount><div class="row action-button-row align-center"><div class="columns button-section"><button class="button button-action" click.delegate="submit()" type="button" data-test-id="add-button"><span class="${spinnerClass}">CONTINUE</span></button></div></div><disclaimer-text></disclaimer-text></template>'
}), define("text!service/credit-card-deposit/form-templates/add-edit-deposit-form/add-edit-deposit-form.html", ["module"], function(e) {
    e.exports = '<template><require from="./add-edit-deposit-form.css"></require><require from="elements/loading-button/loading-button"></require><require from="../../form-field-templates/paypal-deposit-button/paypal-deposit-button"></require><require from="service/credit-card-deposit/form-templates/deposit-limit-warning/deposit-limit-warning"></require><div show.bind="formLoading" class="cards-loading"><div class="row align-center"><loading-spinner class="align-self-middle"></loading-spinner><br><br><br></div></div><div show.bind="!formLoading" class="add-edit-deposit-form"><radio-card-selector model.bind="model.cardSelector" card-changed.delegate="onSelectedCardChanged($event)" toggle-update-section.delegate="toggleCardUpdateSection()" form-loaded.delegate="formLoaded()" inline-update-sumitted.delegate="save()" view-model.ref="cardSelectorVm"></radio-card-selector><div show.bind="addNewCard"><card-number model.bind="model.cardNumber" view-model.ref="cardNumberVm"></card-number></div><div show.bind="addNewCard"><expiry-date model.bind="model.expiryDate" view-model.ref="expiryDateVm" inline-update-sumitted.delegate="save()"></expiry-date></div><div show.bind="addNewCard"><card-cvv model.bind="model.cardCvv" view-model.ref="cardCvvVm" inline-update-sumitted.delegate="save()"></card-cvv></div><deposit-amount model.bind="model.depositAmount" view-model.ref="depositAmountVm" is-paypal.bind="cardSelectorVm.model.selectedCard.CardType === \'PayPal\' ? \'true\' : \'false\'"></deposit-amount><div class="row action-button-row align-center insufficient-button-section"><div if.bind="cardSelectorVm.model.selectedCard.CardType !== \'PayPal\'" class="columns full-width"><loading-button style.bind="\'w-full\'" data-test-id="deposit-and-buy" disabled.bind="cardSelectorVm.model.selectedCard.Expired || cardSelectorVm.model.selectedCard.Editing" button-clicked.call="submit()">${submitButtonText}</loading-button></div><div if.bind="paypalEnabled" class="columns"><div if.bind="cardSelectorVm.model.selectedCard.CardType === \'PayPal\' && paypalUnavailable" class="columns button-section script-error-message"><div class="icon icon--error"></div><span>PayPal is currently unavailable. Refresh the page shortly to try again.</span></div><div if.bind="paypalVaulted && cardSelectorVm.model.selectedCard.CardType === \'PayPal\' && !paypalUnavailable" class="columns full-width"><loading-button show.bind="!paypalDepositLoading" style.bind="\'w-full button--paypal\'" data-test-id="deposit-button" button-clicked.call="submit()">${submitButtonText}</loading-button><button show.bind="paypalDepositLoading" class="button button-action w-full button--paypal" type="button"><span class="${spinnerClass}"></span></button></div><div show.bind="!paypalVaulted && cardSelectorVm.model.selectedCard.CardType === \'PayPal\' && !paypalUnavailable" class="columns full-width"><div show.bind="!hasFormErrors && !paypalAccount"><paypal-deposit-button view-model.ref="paypalButtonViewModel" paypal-account.two-way="paypalAccount"></paypal-deposit-button></div><button show.bind="!hasFormErrors && paypalAccount" class="button button-action paypal-add-deposit-loading" type="button"><span class="${spinnerClass}"></span></button><div show.bind="hasFormErrors"><button show.bind="!paypalAccount" data-test-id="fake-paypal-deposit-button" class="button button-action fake-paypal-button" click.delegate="depositFormIsValid()"><span class="paypal-button-text">Pay with</span> <img class="paypal-button-logo paypal-button-logo-paypal paypal-button-logo-blue" alt="paypal" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg=="></button></div></div></div></div><disclaimer-text></disclaimer-text></div></template>'
}), define("text!service/credit-card-deposit/form-templates/add-form/add-form.html", ["module"], function(e) {
    e.exports = '<template><card-selector card-changed.delegate="onSelectedCardChanged($event)" model.bind="model.cardSelector" view-model.ref="cardSelectorVm"></card-selector><card-number model.bind="model.cardNumber" view-model.ref="cardNumberVm"></card-number><expiry-date model.bind="model.expiryDate" view-model.ref="expiryDateVm"></expiry-date><card-cvv model.bind="model.cardCvv" view-model.ref="cardCvvVm"></card-cvv><div class="row action-button-row align-center"><div class="columns button-section"><button class="button button-action" click.delegate="submit()" type="button"><span class="${spinnerClass}">CONTINUE</span></button></div></div><disclaimer-text></disclaimer-text></template>'
}), define("text!service/credit-card-deposit/form-templates/delete-form/delete-form.html", ["module"], function(e) {
    e.exports = '<template><div><card-details card.bind="model.card"></card-details><div class="row align-center delete-text-row"><div class="columns shrink">Are you sure you want to delete this card?</div></div><div class="row action-button-row align-center"><div class="columns shrink button-section"><button class="button button-delete-cancel" click.delegate="cancel()" type="button"><span class="${spinnerClass}" data-test-id="cancel-button">CANCEL</span></button></div><div class="columns shrink separator-column button-section"></div><div class="columns shrink button-section"><button class="button button-delete-yes" click.delegate="submit()" type="button"><span class="${spinnerClass}" data-test-id="submit-button">YES</span></button></div></div></div></template>'
}), define("text!service/credit-card-deposit/form-templates/deposit-form/deposit-form.html", ["module"], function(e) {
    e.exports = '<template><card-details card.bind="model.card"></card-details><deposit-amount model.bind="model.depositAmount" view-model.ref="depositAmountVm"></deposit-amount><div class="row action-button-row align-center"><div class="columns button-section"><button class="button button-action" click.delegate="submit()" type="button" data-test-id="deposit-button"><span class="${spinnerClass}">DEPOSIT</span></button></div></div><disclaimer-text></disclaimer-text></template>'
}), define("text!service/credit-card-deposit/form-templates/deposit-limit-warning/deposit-limit-warning.html", ["module"], function(e) {
    e.exports = '<template><require from="./deposit-limit-warning.css"></require><div class="deposit-limit-warning"><ux-dialog class="deposit-limit-warning-dialog" data-test-id="deposit-limit-warning-dialog"><ux-dialog-header show-close-button.bind="true"><h2 data-test-id="deposit-limit-warning-dialog-title">Deposit amount exceeds your weekly spend limit</h2></ux-dialog-header><ux-dialog-body><div class="row collapse"><p class="columns" data-test-id="deposit-limit-warning-message">${spendLimitMessage}</p></div><div class="row collapse"><p class="columns" data-test-id="deposit-limit-warning-continue-message">Are you sure you want to continue?</p></div><div class="row deposit-limit-buttons align-center text-center"><button class="button dialog-button hollow button-action" click.delegate="backAction = false" type="button" data-test-id="deposit-limit-warning-back-button">Back</button><div class="separator-column"></div><button class="button dialog-button button-action" click.delegate="continueAction = true" type="button" data-test-id="deposit-limit-warning-continue-button">Continue</button></div></ux-dialog-body></ux-dialog></div></template>'
}), define("text!service/credit-card-deposit/form-templates/edit-form/edit-form.html", ["module"], function(e) {
    e.exports = '<template><card-details card.bind="model.card"></card-details><expiry-date model.bind="model.expiryDate" view-model.ref="expiryDateVm"></expiry-date><div><card-cvv model.bind="model.cardCvv" view-model.ref="cardCvvVm"></card-cvv></div><div class="row action-button-row align-center"><div class="columns button-section"><button class="button button-action" click.delegate="submit()" type="button"><span class="${spinnerClass}" data-test-id="update-button">UPDATE CARD</span></button></div></div></template>'
}), define("text!service/credit-card-deposit/form-templates/nominate-form/nominate-form.html", ["module"], function(e) {
    e.exports = '<template><require from="elements/loading-button/loading-button"></require><require from="../../form-field-templates/paypal-deposit-button/paypal-deposit-button"></require><require from="./nominate-form.css"></require><div show.bind="formLoading" class="cards-loading"><div class="row align-center"><loading-spinner class="align-self-middle"></loading-spinner><br><br><br></div></div><section show.bind="!formLoading" class="nominate-form"><span if.bind="model.bodyMessage" class="bodyMessage">${model.bodyMessage}</span><radio-card-selector model.bind="model.cardSelector" card-changed.delegate="onSelectedCardChanged($event)" toggle-update-section.delegate="toggleCardUpdateSection()" form-loaded.delegate="formLoaded()" inline-update-sumitted.delegate="save()" view-model.ref="cardSelectorVm"></radio-card-selector><div show.bind="addNewCard"><card-number model.bind="model.cardNumber" view-model.ref="cardNumberVm"></card-number></div><div show.bind="addNewCard"><expiry-date model.bind="model.expiryDate" view-model.ref="expiryDateVm" inline-update-sumitted.delegate="save()"></expiry-date></div><div show.bind="addNewCard"><card-cvv model.bind="model.cardCvv" view-model.ref="cardCvvVm" inline-update-sumitted.delegate="save()"></card-cvv></div><div class="row action-button-row align-center insufficient-button-section"><div class="columns text-center"><div if.bind="cardSelectorVm.model.selectedCard.CardType !== \'PayPal\'" class="columns button-section"><loading-button style.bind="\'w-full\'" disabled.bind="cardSelectorVm.model.selectedCard.Expired || cardSelectorVm.model.selectedCard.Editing" data-test-id="nominate-card-button" button-clicked.call="submit()">USE THIS METHOD</loading-button></div><div if.bind="paypalEnabled" class="columns"><div if.bind="cardSelectorVm.model.selectedCard.CardType === \'PayPal\' && paypalUnavailable" class="columns button-section script-error-message"><div class="icon icon--error"></div><span>PayPal is currently unavailable. Refresh the page shortly to try again.</span></div><div if.bind="paypalVaulted && cardSelectorVm.model.selectedCard.CardType === \'PayPal\' && !paypalUnavailable" class="columns button-section"><loading-button style.bind="\'w-full button--paypal\'" data-test-id="nominate-paypal-button" button-clicked.call="submit()">USE THIS METHOD</loading-button></div><div show.bind="!paypalVaulted && cardSelectorVm.model.selectedCard.CardType === \'PayPal\' && !paypalUnavailable" class="columns button-section"><div show.bind="!paypalAccount"><paypal-deposit-button view-model.ref="paypalButtonViewModel" paypal-account.two-way="paypalAccount"></paypal-deposit-button></div><button show.bind="paypalAccount" class="button button-action paypal-add-deposit-loading button-section" type="button"><span class="${spinnerClass}"></span></button></div></div><div class="cancel-sub-setup-container" if.bind="model.showCancelSubscriptionSetupLink"><div>or</div><div class="cancel-sub-setup" click.trigger="controller.cancel()">Cancel subscription setup</div></div></div></div><disclaimer-text if.bind="addNewCard" class="button-section"></disclaimer-text></section></template>'
}), define("text!service/credit-card-deposit/form-templates/paypal-unknown-error/paypal-unknown-error.html", ["module"], function(e) {
    e.exports = '<template><require from="./paypal-unknown-error.css"></require><div class="ux-dialog-middle generic-error-container paypal-unknown-error"><ux-dialog class="generic-error" data-test-id="paypal-unknown-error-dialog"><ux-dialog-header show-close-button="true"><h2 data-test-id="paypal-unknown-error-dialog-title">Uh ohhhhhh...</h2></ux-dialog-header><ux-dialog-body><div class="row collapse"><p class="columns" data-test-id="paypal-unknown-error-message-1">${errorMessage}</p></div><div class="row collapse"><p class="columns" data-test-id="paypal-unknown-error-message-2">Please try again when you are ready.</p></div><div class="row buttons align-center text-center"><button class="button dialog-button button-action" click.trigger="continueAction()" type="button" data-test-id="paypal-unknown-error-continue-button">OK</button></div></ux-dialog-body></ux-dialog></div></template>'
}), define("text!service/credit-card-deposit/form-templates/user-unverified-warning/user-unverified-warning.html", ["module"], function(e) {
    e.exports = '<template><require from="./user-unverified-warning.css"></require><div class="user-unverified-warning"><ux-dialog class="user-unverified-warning-dialog" data-test-id="user-unverified-warning"><ux-dialog-header show-close-button.bind="false"><button type="button" class="dialog-back" aria-label="Back" click.trigger="backHandler($event)" data-test-id="back-button"><span aria-hidden="true">Back</span></button><h2 data-test-id="user-unverified-warning-dialog-title">Deposit Limit Reached</h2></ux-dialog-header><ux-dialog-body><div class="row collapse"><p class="columns" data-test-id="user-unverified-warning-message">Sorry, without verifying your identity the maximum you can deposit into your account is $1000.</p></div><div class="row collapse"><p class="columns" data-test-id="user-unverified-continue-message">To continue you can verify your identity within your account quickly and securely.</p></div><div class="row align-center text-center"><a class="button dialog-button button-action" role="button" data-test-id="verify-identity" href="/account/verify-identity">VERIFY IDENTITY</a></div></ux-dialog-body></ux-dialog></div></template>'
}), define("service/show-dialog-options", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("service/credit-card-deposit/credit-card-actions", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CreditCardActions = {
        Add: {
            form: "add-form/add-form",
            title: "Add new card",
            requiresCard: !1
        },
        Nominate: {
            form: "nominate-form/nominate-form",
            title: "Select payment method",
            requiresCard: !1
        },
        Deposit: {
            form: "deposit-form/deposit-form",
            title: "Deposit",
            requiresCard: !0
        },
        AddDeposit: {
            form: "add-deposit-form/add-deposit-form",
            title: "Deposit with new card",
            requiresCard: !1
        },
        AddEditDeposit: {
            form: "add-edit-deposit-form/add-edit-deposit-form",
            title: "Add new card",
            requiresCard: !1
        },
        Delete: {
            form: "delete-form/delete-form",
            title: "Delete Card",
            requiresCard: !0
        },
        Edit: {
            form: "edit-form/edit-form",
            title: "Edit Card",
            requiresCard: !0
        },
        getFormTypeByActionString: function(e) {
            var r = e.replace(/(^\w|\-\w)/g, function(e) {
                return (e[1] || e[0]).toUpperCase()
            });
            return t.CreditCardActions[r]
        }
    }
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/credit-card-base-view", ["require", "exports", "aurelia-framework", "aurelia-dialog", "services/tatts-log", "aurelia-configuration", "./credit-card-actions"], function(e, t, r, i, o, n, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t, r, i, o) {
            this.element = e, this.controller = t, this.tattsLog = r, this.config = i, this.taskQueue = o, this.spendLimitExceeded = !1, this.isUnverifiedError = !1, this.userOverriddenLimit = !1, this.minTransactionAmount = 0, this.depositAmount = null, this.cvv = "", this.formReady = !1
        }
        return e.prototype.bind = function() {
            this.model.aboutToBeSuspended = !1, this.formTypeOptions = this.getFormTypeOptions(), this.formType = this.formTypeOptions.form, this.model.params = this.model.params || {}, this.model.params.formOptions = this.formTypeOptions, this.model.params.webClientId = this.model.params.webClientId || this.model.webClientId || 10, this.model.params.sessionId = this.model.params.sessionId || this.model.sessionId || null, this.bottomRowClass = "delete-form" === this.formType ? "delete-bottom-row" : "", this.controller.settings.centerHorizontalOnly = !0
        }, e.prototype.getFormTypeOptions = function() {
            return this.model.formType ? this.model.formType : this.model.action ? a.CreditCardActions.getFormTypeByActionString(this.model.action) : void 0
        }, e.prototype.showFormHeaderError = function(e) {
            this.model.formHeaderError = {
                uxClass: e.detail.uxClass,
                title: e.detail.title,
                message: e.detail.message
            }, "Deposit Limit Reached" === this.model.formHeaderError.title && (this.isUnverifiedError = !0)
        }, e.prototype.updateModelSuspended = function() {
            this.model.aboutToBeSuspended = !0
        }, e.prototype.showFormResponseError = function(e) {
            this.model.formResponseError = !(e && e.detail && e.detail.response) || e.detail.response, this.model.closeOnFormResponseError && this.finaliseRequest(e)
        }, e.prototype.hideFormHeaderError = function() {
            this.model.formHeaderError = null
        }, e.prototype.hideFormResponseError = function() {
            this.model.formResponseError = null
        }, e.prototype.formLoadedEvent = function() {
            var e = this;
            this.taskQueue.flushMicroTaskQueue(), this.taskQueue.queueMicroTask(function() {
                e.formReady = !0
            })
        }, e.prototype.userOverriddenLimitChanged = function(e) {
            this.model.params.userOverriddenLimit = e
        }, e.prototype.formUnloadedEvent = function() {
            this.formReady = !1
        }, e.prototype.cancel = function() {
            this.controller.cancel()
        }, e.prototype.updateTitle = function(e) {
            e.detail && e.detail.title && (this.title = e.detail.title), e.detail && e.detail.subtitle && (this.subtitle = e.detail.subtitle)
        }, e.prototype.finaliseRequest = function(e) {
            return this.controller.ok(e.detail)
        }, e.prototype.triggerSpendLimitExceeded = function(e) {
            this.spendLimitMessage = e.detail.message, this.spendLimitExceeded = !0
        }, e.prototype.showVaultedUnknownError = function(e) {
            this.vaultedUnknownErrorMessage = e.detail.message, this.vaultedUnknownError = !0
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "title", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "subtitle", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Boolean)], e.prototype, "spendLimitExceeded", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "spendLimitMessage", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Boolean)], e.prototype, "isUnverifiedError", void 0), __decorate([r.bindable, __metadata("design:type", Boolean)], e.prototype, "userOverriddenLimit", void 0), __decorate([r.bindable, __metadata("design:type", Object)], e.prototype, "model", void 0), __decorate([r.bindable, __metadata("design:type", Object)], e.prototype, "vaultedUnknownErrorMessage", void 0), __decorate([r.bindable, __metadata("design:type", Boolean)], e.prototype, "vaultedUnknownError", void 0), e = __decorate([r.containerless(), r.customElement("credit-card-base-view"), r.inject(Element, i.DialogController, o.TattsLog, n.AureliaConfiguration, r.TaskQueue), __metadata("design:paramtypes", [Element, i.DialogController, o.TattsLog, n.AureliaConfiguration, r.TaskQueue])], e)
    }();
    t.CreditCardBaseView = s
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/credit-card-deposit-service", ["require", "exports", "aurelia-dependency-injection", "aurelia-framework", "services/tatts-http", "services/tatts-math", "services/user-context", "services/tatts-log", "services/tatts-account-service", "./credit-card-deposit-urls", "aurelia-configuration", "services/tatts-event-service", "events/credit-cards"], function(e, t, r, i, o, n, a, s, d, c, l, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var m = function() {
        function e(e, t, r, i, o, n, a) {
            this.http = e, this.context = t, this.log = r, this.urls = i, this.config = o, this.accountService = n, this.event = a, this.mobileWebCliendIds = ["2", "3", "4"], this.theLottWebCliendId = 10
        }
        return e.prototype.addCreditCardTokenised = function(e, t, r, i, o) {
            return this.processCreditCardApiRequest(this.urls.addCreditCardTokenised, {
                HostedSession: {
                    Id: e,
                    Version: t
                },
                RecurringPay: !!r,
                WebClientId: o || this.theLottWebCliendId
            }, new p.CreditCardAddSuccessEvent, new p.CreditCardAddFailureEvent, i)
        }, e.prototype.addDepositCreditCardTokenised = function(e, t, r, i, o, a, s) {
            var d = this,
                c = this.stringToFloat(this.context.accountTotalBalance),
                l = new p.CreditCardAddFailureEvent;
            return this.processCreditCardApiRequest(this.urls.addDepositCreditCardTokenised, {
                DepositAmount: r,
                HostedSession: {
                    Id: e,
                    Version: t
                },
                RecurringPay: !!i,
                WebClientId: s || this.theLottWebCliendId
            }, null, l, a).then(function(e) {
                if (d.selectAndPublishEvent(e, new p.CreditCardAddSuccessEvent, l), (r = d.stringToFloat(r)) > 0) {
                    var t = new p.CreditCardDepositSuccessEvent(r, n.TattsMath.addCurrency(c, r), c, o, "Checkout");
                    d.selectAndPublishEvent(e, t, l)
                }
                return e
            })
        }, e.prototype.updateCreditCardTokenised = function(e, t, r, i, o, n) {
            return this.processCreditCardApiRequest(this.urls.updateCreditCardTokenised, {
                HostedSession: {
                    Id: t,
                    Version: r
                },
                InternalCardId: e,
                RecurringPay: !!i,
                WebClientId: n || this.theLottWebCliendId
            }, new p.CreditCardEditSuccessEvent, new p.CreditCardEditFailureEvent, o)
        }, e.prototype.removeCreditCard = function(e) {
            return this.processCreditCardApiRequest(this.urls.removeCreditCard, {
                CreditCardId: e
            }, new p.CreditCardRemoveSuccessEvent, new p.CreditCardRemoveFailureEvent)
        }, e.prototype.getCreditCards = function(e) {
            return this.processCreditCardApiRequest(this.urls.getCreditCards, {}, null, null, e)
        }, e.prototype.requestCreditCardDepositTokenised = function(e, t, r, i, o) {
            var a = this,
                s = this.stringToFloat(this.context.accountTotalBalance),
                d = new p.CreditCardDepositFailureEvent;
            return this.processCreditCardApiRequest(this.urls.creditCardDepositTokenised, {
                CreditCardId: e,
                DepositAmount: r,
                RecurringPay: !!i
            }, null, d, o).then(function(e) {
                r = a.stringToFloat(r);
                var i = new p.CreditCardDepositSuccessEvent(r, n.TattsMath.addCurrency(s, r), s, t, "Checkout");
                return a.selectAndPublishEvent(e, i, d), e
            })
        }, e.prototype.nominateCreditCardTokenised = function(e) {
            return this.processCreditCardApiRequest(this.urls.nominateCreditCardTokenised, {
                InternalCardId: e
            })
        }, e.prototype.processCreditCardApiRequest = function(e, t, r, i, o) {
            var n = this;
            return void 0 === r && (r = null), void 0 === i && (i = null), void 0 === o && (o = null), t.CustomerSession || (t = Object.assign({
                CustomerSession: {
                    SessionId: o || this.context.sessionId
                }
            }, t)), this.http.client.fetch(e, {
                method: "POST",
                body: JSON.stringify(t)
            }).then(function(e) {
                return r && i && n.selectAndPublishEvent(e, r, i), e
            }).catch(function(e) {
                return i && n.event.publishT(i), n.log.error("CreditCardDepositService - processCreditCardApiRequest", "Caught {error}", [e]), Promise.reject(e)
            })
        }, e.prototype.selectAndPublishEvent = function(e, t, r) {
            return e && e.Success ? this.event.publishT(t) : this.event.publishT(r)
        }, e.prototype.stringToFloat = function(e) {
            return parseFloat(e) || 0
        }, e.prototype.roundUpCurrency = function(e) {
            return Math.ceil(Math.round(1e3 * e) / 10) / 100
        }, e.prototype.isMobileDevice = function(e) {
            return -1 !== this.mobileWebCliendIds.indexOf(e)
        }, e = __decorate([i.singleton(!0), r.inject(o.TattsHttp, a.UserContext, s.TattsLog, c.default, l.AureliaConfiguration, d.TattsAccountService, u.TattsEvent), __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])], e)
    }();
    t.CreditCardDepositService = m
}), define("service/credit-card-deposit/credit-card-deposit-urls", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return Object.defineProperty(e.prototype, "getCreditCards", {
            get: function() {
                return "sales/vmax/web/account/banking/creditcard"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "creditCardDepositTokenised", {
            get: function() {
                return "sales/vmax/web/account/banking/creditcard/deposit/v2"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "updateCreditCardTokenised", {
            get: function() {
                return "sales/vmax/web/account/banking/creditcard/editauth"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "addCreditCardTokenised", {
            get: function() {
                return "sales/vmax/web/account/banking/creditcard/addauth"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "addDepositCreditCardTokenised", {
            get: function() {
                return "sales/vmax/web/account/banking/creditcard/adddeposit"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "removeCreditCard", {
            get: function() {
                return "sales/vmax/web/account/banking/creditcard/remove"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nominateCreditCardTokenised", {
            get: function() {
                return "sales/vmax/web/account/subscription/nominateautoplaycard"
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.CreditCardDepositUrls = r, Object.freeze(r), t.default = r
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        function o(e) {
            return e instanceof r ? e : new r(function(t) {
                t(e)
            })
        }
        return new(r || (r = Promise))(function(r, n) {
            function a(e) {
                try {
                    d(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    d(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function d(e) {
                e.done ? r(e.value) : o(e.value).then(a, s)
            }
            d((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(r) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; d;) try {
                if (o = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, r[1])).done) return a;
                switch (n = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                    case 0:
                    case 1:
                        a = r;
                        break;
                    case 4:
                        return d.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        d.label++, n = r[1], r = [0];
                        continue;
                    case 7:
                        r = d.ops.pop(), d.trys.pop();
                        continue;
                    default:
                        if (a = d.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            d = 0;
                            continue
                        }
                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            d.label = r[1];
                            break
                        }
                        if (6 === r[0] && d.label < a[1]) {
                            d.label = a[1], a = r;
                            break
                        }
                        if (a && d.label < a[2]) {
                            d.label = a[2], d.ops.push(r);
                            break
                        }
                        a[2] && d.ops.pop(), d.trys.pop();
                        continue
                }
                r = t.call(e, d)
            } catch (e) {
                r = [6, e], n = 0
            } finally {
                o = a = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var o, n, a, s, d = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/credit-card-deposit/credit-card-dialog-service", ["require", "exports", "aurelia-framework", "./credit-card-deposit-service", "aurelia-dialog", "./container-templates/inline-deposit-dialog/inline-deposit-dialog", "./container-templates/account-dialog/account-dialog", "./credit-card-actions", "services/user-context", "services/login/session-service", "services/tatts-log", "services/tatts-http", "services/tatts-event-service", "events/credit-cards", "events/ddl"], function(e, t, r, i, o, n, a, s, d, c, l, u, p, m, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var f = function() {
        function e(e, t, r, i, o, n, a) {
            this.dialogService = e, this.creditCardDepositService = t, this.userContext = r, this.log = i, this.eventService = o, this.http = n, this.sessionService = a, this.openDepositDialogResult = null
        }
        return e.prototype.handleError = function(e, t) {
            return this.log.error(e, "{error}", t), Promise.reject(t)
        }, e.prototype.showAddEditDepositCardDialog = function(e) {
            var t = this;
            return void 0 === e && (e = 1), this.eventService.publishT(new h.DigitalDataLayerEvent("InitiateAddEditDepositCard")), this.openDialog(n.InlineDepositDialog, s.CreditCardActions.AddEditDeposit, {
                deposit: e
            }).catch(function(e) {
                return t.handleError("showAddEditDepositCardDialog", e)
            })
        }, e.prototype.showAddCardDialog = function() {
            var e = this;
            return this.eventService.publishT(new m.CreditCardOpenAddEvent), this.openDialog(a.AccountDialog, s.CreditCardActions.Add, {}).catch(function(t) {
                return e.handleError("showAddCardDialog", t)
            })
        }, e.prototype.showAddDepositCardDialog = function(e, t) {
            var r = this;
            return void 0 === e && (e = null), void 0 === t && (t = 1), this.eventService.publishT(new h.DigitalDataLayerEvent("InitiateAddDepositCard")), this.openDialog(a.AccountDialog, s.CreditCardActions.AddDeposit, {
                card: e,
                deposit: t
            }).catch(function(e) {
                return r.handleError("showAddDepositCardDialog", e)
            })
        }, e.prototype.showNominateCardDialog = function(e, t, r) {
            return void 0 === e && (e = null), void 0 === t && (t = null), void 0 === r && (r = !0), __awaiter(this, void 0, void 0, function() {
                var i, o;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (this.eventService.publishT(new h.DigitalDataLayerEvent("InitiateNominateCard")), i = {
                                    card: e
                                }, t && (i.title = t.title, i.bodyMessage = t.bodyMessage, i.buttonText = t.buttonText, i.autoplayMethod = t.autoplayMethod, i.nominatedCardNumber = t.nominatedCardNumber, i.hideCloseIcon = t.hideCloseIcon, i.showCancelSubscriptionSetupLink = t.showCancelSubscriptionSetupLink, i.dialogIcon = t.dialogIcon), !r) return [3, 5];
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, , 4]), [4, this.openDialog(a.AccountDialog, s.CreditCardActions.Nominate, i)];
                        case 2:
                            return [2, n.sent()];
                        case 3:
                            return o = n.sent(), [2, this.handleError("showNominateCardDialog", o)];
                        case 4:
                            return [3, 7];
                        case 5:
                            return [4, this.openDialog(a.AccountDialog, s.CreditCardActions.Nominate, i)];
                        case 6:
                            return [2, n.sent()];
                        case 7:
                            return [2]
                    }
                })
            })
        }, e.prototype.showAddNominateCardDialog = function() {
            var e = this;
            return this.eventService.publishT(new h.DigitalDataLayerEvent("InitiateAddNominateCard")), this.openDialog(a.AccountDialog, s.CreditCardActions.Add, {
                recurringPay: !0
            }).catch(function(t) {
                return e.handleError("showAddNominateCardDialog", t)
            })
        }, e.prototype.showEditCardDialog = function(e) {
            var t = this;
            return this.eventService.publishT(new m.CreditCardOpenEditEvent), this.openDialog(a.AccountDialog, s.CreditCardActions.Edit, {
                card: e
            }).catch(function(e) {
                return t.handleError("showEditCardDialog", e)
            })
        }, e.prototype.showDeleteCardDialog = function(e) {
            var t = this;
            return this.eventService.publishT(new h.DigitalDataLayerEvent("InitiateDeleteCard")), this.openDialog(a.AccountDialog, s.CreditCardActions.Delete, {
                card: e
            }).catch(function(e) {
                return t.handleError("showDeleteCardDialog", e)
            })
        }, e.prototype.showDepositCardDialog = function(e, t) {
            var r = this;
            return void 0 === t && (t = 1), this.eventService.publishT(new h.DigitalDataLayerEvent("InitiateDepositCard")), this.openDialog(a.AccountDialog, s.CreditCardActions.Deposit, {
                card: e,
                deposit: t
            }).catch(function(e) {
                return r.handleError("showDepositCardDialog", e)
            })
        }, e.prototype.openDialog = function(e, t, r) {
            return __awaiter(this, void 0, void 0, function() {
                var i, o, n, a;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (!this.userContext.isLoggedIn) throw new Error("Client is not logged in");
                            if (t.requiresCard && !r.card) throw new Error("Client provided invalid card");
                            return [4, this.dialogService.closeAll()];
                        case 1:
                            return s.sent(), [4, this.dialogService.open({
                                viewModel: e,
                                model: {
                                    formType: t,
                                    params: r
                                },
                                lock: !1,
                                startingZIndex: 1350
                            })];
                        case 2:
                            return i = s.sent(), [4, i.closeResult];
                        case 3:
                            if (o = s.sent(), !(n = i.controller.controller.viewModel.accountIsSuspended)) return [3, 8];
                            s.label = 4;
                        case 4:
                            return s.trys.push([4, 6, , 7]), [4, this.sessionService.logout()];
                        case 5:
                            return s.sent(), [3, 7];
                        case 6:
                            return a = s.sent(), this.log.error("CreditCardDialogService", "Attempt to logout gave {error}", [a]), [3, 7];
                        case 7:
                            return window.location.assign("/"), [2, new g];
                        case 8:
                            return o.wasCancelled ? [2, null] : [2, new v(o.output.response, o.output.creditCardId, o.output.depositAmount, o.output.sessionId)]
                    }
                })
            })
        }, e = __decorate([r.inject(o.DialogService, i.CreditCardDepositService, d.UserContext, l.TattsLog, p.TattsEvent, u.TattsHttp, c.SessionService), __metadata("design:paramtypes", [o.DialogService, i.CreditCardDepositService, d.UserContext, l.TattsLog, p.TattsEvent, u.TattsHttp, c.SessionService])], e)
    }();
    t.CreditCardDialogService = f;
    var g = function() {
        function e() {}
        return e.discriminator = "DialogWasClosedAfterAccountSuspensionMessage", e
    }();
    t.DialogWasClosedAfterAccountSuspensionMessage = g;
    var v = function() {
        function e(e, t, r, i) {
            this.response = e, this.creditCardId = t, this.depositAmount = r, this.sessionId = i
        }
        return e
    }();
    t.DialogWasClosedUnderAnyOtherNormalCircumstance = v
}), define("service/credit-card-deposit/credit-card-models", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e
    }();
    t.CreditCard = r, t.CreditCardStatus = {
        Valid: "valid",
        Unconfirmed: "unconfirmed",
        ConfirmationPending: "confirmationPending",
        Expired: "expired"
    }
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/hosted-session-service", ["require", "exports", "aurelia-dependency-injection", "aurelia-framework", "services/tatts-http", "services/user-context", "services/tatts-log", "json!credit-card-service-environment.json"], function(e, t, r, i, o, n, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = function() {
        function e(e, t, r) {
            this.http = e, this.context = t, this.log = r, this.mastercardUrl = "", this.mastercardScriptId = "mastercard-session", this.windowTokenisation = window.tokenisation, this.mastercardUrl = this.windowTokenisation && this.windowTokenisation.mastercardUrl || s.tokenisation.mastercardUrl
        }
        return e.prototype.isValidCvvFromMastercard = function(e) {
                var t = !0;
                return null !== e && void 0 !== e && (e.status ? "ok" === e.status ? t = !!e.sourceOfFunds.provided.card.securityCode && 3 === e.sourceOfFunds.provided.card.securityCode.length : "fields_in_error" === e.status && (t = !e.errors.securityCode) : t = !1), t
            }, e.prototype.isValidCardFromMastercard = function(e, t) {
                var r = !0;
                return null !== e && (r = !!e.status && ("fields_in_error" === e.status ? !e.errors.cardNumber : e.sourceOfFunds.provided.card.brand.toUpperCase() === t.toUpperCase())), r
            }, e.prototype.isMastercardLoaded = function() {
                if (!document.getElementById(this.mastercardScriptId)) return !1;
                var e = document.querySelectorAll('iframe[src^="https://ap-gateway.mastercard.com"]');
                return !(!(e = Array.apply(null, e)) || e.length <= 0)
            }, e.prototype.addMastercardScript = function() {
                var e = this;
                return new Promise(function(t, r) {
                    var i = document.createElement("script");
                    i.src = e.mastercardUrl, i.id = e.mastercardScriptId, i.async = !0, i.onload = function() {
                        t()
                    }, document.querySelector("head").appendChild(i)
                }).catch(function(t) {
                    return e.log.error("CreditCardDepositService - addMastercardScript", "Caught {error}", [t]), Promise.reject(t)
                })
            }, e.prototype.removeMastercardScript = function() {
                window.PaymentSession && (window.PaymentSession = null);
                var e = document.getElementById(this.mastercardScriptId);
                e && document.querySelector("head").removeChild(e);
                var t = document.querySelectorAll('iframe[src^="https://ap-gateway.mastercard.com"]');
                if (t && !(t.length <= 0))
                    for (var r = Array.apply(null, t), i = 0, o = r; i < o.length; i++) {
                        var n = o[i],
                            a = n.parentNode.querySelectorAll('input[style*="display: none"]');
                        if (a) {
                            a = Array.apply(null, a);
                            for (var s = 0, d = a; s < d.length; s++) {
                                var c = d[s];
                                c.style.display = "block"
                            }
                        }
                        n.parentNode.removeChild(n)
                    }
            }, e.prototype.addPaymentSessionAfterPageReady = function(e, t) {
                var r = this;
                return this.addMastercardScript().then(function() {
                    return r.initializedPaymentSession(e, t)
                }).catch(function(e) {
                    return Promise.reject(new Error("Error addPaymentSessionAfterPageReady. - " + e))
                })
            }, e.prototype.initializedPaymentSession = function(e, t) {
                var r;
                return r = t ? {
                    card: {
                        number: "#card-number",
                        expiryMonth: "#expiry-month",
                        expiryYear: "#expiry-year",
                        securityCode: "#security-code"
                    }
                } : {
                    card: {
                        expiryMonth: "#expiry-month-edit",
                        expiryYear: "#expiry-year-edit",
                        securityCode: "#security-code-edit"
                    }
                }, new Promise(function(t, i) {
                    window.PaymentSession.configure({
                        fields: r,
                        frameEmbeddingMitigation: ["javascript"],
                        callbacks: {
                            initialized: function(e) {
                                t(e)
                            },
                            formSessionUpdate: function(t) {
                                e(t)
                            }
                        }
                    }), window.PaymentSession.setFocusStyle(["card.number", "card.securityCode"], {
                        border: "1px solid #444444",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 0 5px #B2B2B2"
                    })
                })
            },
            e.prototype.submitPaymentSession = function() {
                window.PaymentSession.updateSessionFromForm("card")
            }, e.prototype.isPaymentSessionFailed = function(e) {
                return !e.status || "request_timeout" === e.status || "system_error" === e.status
            }, e = __decorate([i.singleton(!0), r.inject(o.TattsHttp, n.UserContext, a.TattsLog), __metadata("design:paramtypes", [Object, Object, Object])], e)
    }();
    t.HostedSessionService = d
}), define("service/credit-card-deposit/index", ["require", "exports", "json!credit-card-service-environment.json"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.configure = function(e) {
        e.aurelia.use.plugin("layout-base", {
            componentConfiguration: Object.assign(r, {
                tokenisation: {
                    mastercardUrl: window.tokenisation && window.tokenisation.mastercardUrl || r.tokenisation && r.tokenisation.mastercardUrl
                }
            })
        }).globalResources(["service/credit-card-deposit/credit-card-base-view", "service/credit-card-deposit/credit-card-deposit.css"]).feature("./service/credit-card-deposit/form-templates").feature("./service/credit-card-deposit/form-field-templates").plugin("aurelia-validation").plugin("aurelia-dialog", function(e) {
            e.useDefaults()
        })
    }
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
    var o, n = arguments.length,
        a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
    else
        for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
    return n > 3 && a && Object.defineProperty(t, r, a), a
};
define("service/credit-card-deposit/converters/card-number-format", ["require", "exports", "aurelia-framework"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.toView = function(e, t) {
            return e ? e.replace(/([0-9\*]{4})([0-9\*]{4})([0-9\*]{4})([0-9\*]{4})/, "$1 $2 $3 $4") : ""
        }, e = __decorate([r.valueConverter("cardNumberFormat")], e)
    }();
    t.CardNumberFormatValueConverter = i
}), define("service/credit-card-deposit/credit-card-errors/form-header-errors", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ErrorMessageSystemConnection = "Sorry, there was a problem connecting to our system to process your transaction. Please try again or call our Customer Support team on 131 868 to report this issue.", t.ErrorMessageCannotProcess = "We were unable to process your transaction. Please choose another payment method or contact your bank for further assistance.", t.ErrorMessageIncorrectDetails = "The details you have entered are incorrect. Please review and try again, choose another payment method or contact your bank for further assistance.", t.ErrorMessageBankDoesNotAllow = "Your bank does not allow this type of transaction on this card. You can choose another payment method or contact your bank for further assistance.", t.ErrorMessageBankDeclined = "We cannot process this transaction as it has been declined by your bank. Please choose another payment method or contact your bank for further information.", t.ErrorMessageIncorrectExpiry = "The details you have entered are incorrect. Please review and try again.", t.ErrorMessageTooManyCards = "We were unable to process your transaction as using this new card will exceed the number of cards we’ll allow in your account. Please choose another payment method to transact with or call our Customer Support team on 131 868 for further assistance.", t.ErrorMessagePaypalSystemConnection = "Sorry, there was a problem connecting to PayPal. Please try again or call our Customer Support team on 131 868 to report this issue.", t.ErrorMessageSoftDecline = "Sorry, your request to deposit funds was not successful. Please check your card details and try again.", t.FormHeaderErrorCodes = {
        3223: {
            title: "Deposit maximum reached",
            message: "We cannot process this transaction as it exceeds our system deposit limit. Please enter a smaller amount and try again."
        },
        3224: {
            title: "Over deposit limit",
            message: "You have exceeded the deposit limit we’ll accept for this payment method. Please choose another payment method or contact our Customer Support team on 131 868 to discuss increasing your card’s limit."
        },
        3300: {
            title: "Deposit Limit Reached",
            message: null
        },
        3302: {
            title: "",
            message: "Sorry, your request to add PayPal was not successful as a PayPal account already exists on your account."
        },
        3303: {
            title: "",
            message: "Sorry, your request was not successful as there is no record of your PayPal account."
        },
        3308: {
            title: "Over deposit limit",
            message: "You have exceeded the deposit limit we’ll accept for this payment method. Please choose another payment method or contact our Customer Support team on 131 868 to discuss increasing your payment method’s limit."
        },
        3309: {
            title: "",
            message: "Sorry, you have exceeded the number of times PayPal can be added to your account within a time period. Please contact our Customer Support team on 131 868 for further assistance."
        },
        5311: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5312: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5319: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5320: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5322: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5324: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5325: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5327: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5328: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5329: {
            title: "",
            message: "We were unable to process your transaction. Please try again."
        },
        5330: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5331: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5332: {
            title: "",
            message: "We were unable to connect to your bank to process your transaction. Please review your details and try again."
        },
        5333: {
            title: "",
            message: "Sorry, we were unable to process your request. Please try again or call our Customer Support team on 131 868 to report this issue."
        },
        5334: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5335: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5336: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5337: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5338: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5339: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5340: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5341: {
            title: "",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5342: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5349: {
            title: "",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5350: {
            title: "Card not supported",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5352: {
            title: "Card not supported",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5354: {
            title: "",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5355: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5356: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5357: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5358: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5359: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5360: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5361: {
            title: "Insufficient funds",
            message: "Your card does not have enough funds available to process this transaction. You can choose another payment method or contact your bank for further assistance."
        },
        5362: {
            title: "",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5363: {
            title: "",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5364: {
            title: "",
            message: "Your credit card has expired. Please update with the new expiry date, choose another payment method or contact your bank for further assistance."
        },
        5365: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5366: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5367: {
            title: "",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5368: {
            title: "",
            message: t.ErrorMessageBankDoesNotAllow
        },
        5370: {
            title: "",
            message: t.ErrorMessageBankDeclined
        },
        5371: {
            title: "Card limit reached",
            message: "We cannot process this transaction as it will exceed your card’s limit. You can choose another payment method or contact your bank for further assistance."
        },
        5372: {
            title: "",
            message: t.ErrorMessageBankDeclined
        },
        5373: {
            title: "",
            message: t.ErrorMessageBankDeclined
        },
        5374: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5375: {
            title: "Card limit reached",
            message: "We cannot process this transaction as it will exceed your card’s frequency limit. Please choose another payment method or contact your bank for further assistance."
        },
        5376: {
            title: "",
            message: t.ErrorMessageBankDeclined
        },
        5378: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5379: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5380: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5381: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5382: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5383: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5384: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5385: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5386: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5387: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5388: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5389: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5390: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5391: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5392: {
            title: "",
            message: t.ErrorMessageIncorrectDetails
        },
        5393: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5394: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5395: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5396: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5397: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5398: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5399: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        3205: {
            title: "Card not supported",
            message: "Sorry, we only currently accept VISA or Mastercard."
        },
        3206: {
            title: "Check expiry date",
            message: t.ErrorMessageIncorrectExpiry
        },
        3211: {
            title: "",
            message: "This card already exists in your account."
        },
        3196: {
            title: "",
            message: "Sorry, we are awaiting a response from your bank regarding your transaction. As a safeguard you will not be able to retry until we receive a response."
        },
        5426: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        5427: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        5428: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        5429: {
            title: "Check expiry date",
            message: t.ErrorMessageIncorrectExpiry
        },
        5430: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        5431: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        5432: {
            title: "Check expiry date",
            message: t.ErrorMessageIncorrectExpiry
        },
        5433: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        5434: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        5435: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        5436: {
            title: "",
            message: t.ErrorMessageSystemConnection
        },
        3329: {
            title: "",
            message: "Sorry, you have changed or added too many credit cards. Please try again or call our Customer Support team on 131 868 to report this issue."
        },
        5315: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5316: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5317: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5347: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5348: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        5369: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        3207: {
            title: "",
            message: "We were unable to process your transaction as using this new card will exceed the number of cards we’ll allow in your account. To add this new card please remove one of your existing cards first."
        },
        3229: {
            title: "",
            message: t.ErrorMessageTooManyCards
        },
        5441: {
            title: "",
            message: t.ErrorMessageCannotProcess
        },
        3312: {
            title: "",
            message: t.ErrorMessageSoftDecline
        },
        3313: {
            title: "",
            message: t.ErrorMessageSoftDecline
        }
    }
}), define("service/credit-card-deposit/credit-card-errors/redirectable-errors", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RedirectableErrorTitle = "", t.RedirectableErrorMessage = "We did not process your transaction and have suspended your account. Please contact your bank for further information and call us on 131 868 to start playing again.", t.RedirectableErrorCodes = {
        5314: {
            title: t.RedirectableErrorTitle,
            message: t.RedirectableErrorMessage
        },
        5343: {
            title: t.RedirectableErrorTitle,
            message: t.RedirectableErrorMessage
        },
        5344: {
            title: t.RedirectableErrorTitle,
            message: t.RedirectableErrorMessage
        },
        5345: {
            title: t.RedirectableErrorTitle,
            message: t.RedirectableErrorMessage
        },
        5346: {
            title: t.RedirectableErrorTitle,
            message: t.RedirectableErrorMessage
        },
        5351: {
            title: t.RedirectableErrorTitle,
            message: t.RedirectableErrorMessage
        },
        5353: {
            title: t.RedirectableErrorTitle,
            message: t.RedirectableErrorMessage
        },
        5377: {
            title: t.RedirectableErrorTitle,
            message: t.RedirectableErrorMessage
        }
    }
}), define("service/credit-card-deposit/form-field-templates/index", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.configure = function(e) {
        e.aurelia.use.globalResources(["service/credit-card-deposit/form-field-templates/card-cvv/card-cvv", "service/credit-card-deposit/form-field-templates/card-details/card-details", "service/credit-card-deposit/form-field-templates/card-number/card-number", "service/credit-card-deposit/form-field-templates/card-selector/card-selector", "service/credit-card-deposit/form-field-templates/deposit-amount/deposit-amount", "service/credit-card-deposit/form-field-templates/disclaimer-text/disclaimer-text.html", "service/credit-card-deposit/form-field-templates/expiry-date/expiry-date", "service/credit-card-deposit/form-field-templates/radio-card-selector/radio-card-selector", "service/credit-card-deposit/form-field-templates/paypal-deposit-button/paypal-deposit-button", "service/credit-card-deposit/form-field-templates/update-credit-card/update-credit-card"])
    }
}), define("service/credit-card-deposit/form-templates/form-base", ["require", "exports", "../credit-card-errors/form-header-errors", "../credit-card-errors/redirectable-errors"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t, r, i, o, n, a, s, d) {
            var c = this;
            this.element = e, this.creditCardDepositService = t, this.hostedSessionService = r, this.config = i, this.paypalService = o, this.userContext = n, this.log = a, this.eventService = s, this.bindingEngine = d, this.needCardNumber = !0, this.spinnerClass = "", this.preventFormChanges = null, this.paypalDepositLoading = !1, this.processFormSessionUpdate = function(e) {
                return c.masterCardResponse = e, c.model.cardNumber && (c.model.cardNumber.masterCardResponse = e), c.model.cardCvv && (c.model.cardCvv.masterCardResponse = e), c.hostedSessionService.isPaymentSessionFailed(e) ? c.finaliseSubmit() : c.submitTokenised()
            }, this.masterCardResponse = null
        }
        return e.prototype.activate = function(e) {
            this.model = this.model || e
        }, e.prototype.attached = function() {
            var e = this;
            this.loadForm().then(function() {
                return e.onFormLoaded()
            }).catch(function(t) {
                return e.showFormResponseError(t)
            })
        }, e.prototype.loadForm = function() {
            return Promise.resolve()
        }, e.prototype.deactivate = function() {
            this.hostedSessionService.removeMastercardScript()
        }, e.prototype.formIsValid = function() {}, e.prototype.submit = function() {}, e.prototype.submitTokenised = function() {}, e.prototype.expiryDateIsValid = function() {
            var e = this;
            return this.expiryDateVm ? this.expiryDateVm.validate().then(function(t) {
                return t.valid ? Promise.resolve(!0) : (e.hideSubmitButtonSpinner(), Promise.resolve(!1))
            }) : Promise.resolve(!0)
        }, e.prototype.onSelectedCardChanged = function(e) {
            this.cardNumberVm && this.cardNumberVm.updateCardType(e.detail.value)
        }, e.prototype.finaliseSubmit = function(e, t) {
            if (void 0 === e && (e = null), void 0 === t && (t = null), e && !e.Success) return this.showError(e);
            var r = this.buildEventResponseData(e, t),
                i = new CustomEvent("finalise-submit", r);
            this.element.dispatchEvent(i)
        }, e.prototype.showError = function(e, t) {
            if (void 0 === e && (e = null), void 0 === t && (t = null), !e.Success) {
                var o = e.ErrorInfo ? r.FormHeaderErrorCodes[e.ErrorInfo.ErrorNo] : null;
                if (o) return this.showFormHeaderError(o.title || "", o.message || e.ErrorInfo.DisplayMessage, "error", e, t);
                var n = e.ErrorInfo ? i.RedirectableErrorCodes[e.ErrorInfo.ErrorNo] : null;
                return n ? this.showAccountSuspendedError(n.title, n.message) : this.showFormResponseError(e, t)
            }
        }, e.prototype.buildEventResponseData = function(e, t) {
            void 0 === e && (e = null), void 0 === t && (t = null);
            var r = null;
            if (e && (r = e.CreditCardId), !r) {
                var i = this.model.card || this.findSelectedCard();
                i && i.CreditCardId && (r = i.CreditCardId)
            }
            return t && (t = parseFloat(t), isNaN(t) && (t = 0)), {
                detail: {
                    response: e,
                    creditCardId: r,
                    depositAmount: t,
                    sessionId: this.model.sessionId
                },
                bubbles: !0
            }
        }, e.prototype.showAccountSuspendedError = function(e, t) {
            this.showFormHeaderError(e, t, "error-lock"), this.model.suspended = !0;
            var r = new CustomEvent("model-suspended", {
                detail: {
                    suspended: this.model.suspended
                },
                bubbles: !0
            });
            this.element.dispatchEvent(r)
        }, e.prototype.onFormLoaded = function() {
            this.hideSubmitButtonSpinner();
            var e = new CustomEvent("form-loaded", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, e.prototype.onFormUnloaded = function() {
            var e = new CustomEvent("form-unloaded", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, e.prototype.populateCards = function() {
            var e = this;
            return this.creditCardDepositService.isMobileDevice(this.model.webClientId) ? Promise.resolve() : this.creditCardDepositService.getCreditCards(this.model.sessionId).then(function(t) {
                if (!t.Success) return e.finaliseSubmit(t);
                e.model.cards = t.CreditCards, e.cardSelectorVm && (e.cardSelectorVm.model.cards = t.CreditCards);
                var r = e.model.cards.find(function(e) {
                        return e.Authorised
                    }),
                    i = "Add new card";
                return r ? (e.model.selectedCard = r, e.cardSelectorVm.model.selectedCard = r, i = "Select payment method") : e.model.cards.length > 0 && (i = "Select payment method"), e.updateTitle(e.model.title || i), e.model.cards
            })
        }, e.prototype.updateTitle = function(e) {
            var t = new CustomEvent("update-title", {
                detail: {
                    title: e
                },
                bubbles: !0
            });
            this.element.dispatchEvent(t)
        }, e.prototype.updateSubTitle = function(e) {
            var t = new CustomEvent("update-title", {
                detail: {
                    subtitle: e
                },
                bubbles: !0
            });
            this.element.dispatchEvent(t)
        }, e.prototype.cancel = function() {
            var e = new CustomEvent("cancel-clicked", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, e.prototype.showFormHeaderError = function(e, t, r, i, o) {
            void 0 === i && (i = null), void 0 === o && (o = null);
            var n = this.buildEventResponseData(i, o);
            n.detail = Object.assign(n.detail, n.detail, {
                title: e,
                message: t,
                uxClass: r
            });
            var a = new CustomEvent("show-form-header-error", n);
            this.element.dispatchEvent(a), this.hideSubmitButtonSpinner();
            var s = document.getElementsByTagName("ux-dialog-header");
            s && s[0] && setTimeout(function() {
                s[0].scrollIntoView()
            }, 500)
        }, e.prototype.hideFormHeaderError = function() {
            var e = new CustomEvent("hide-form-header-error", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, e.prototype.showFormResponseError = function(e, t) {
            void 0 === e && (e = null), void 0 === t && (t = null);
            var r = this.buildEventResponseData(e, t),
                i = new CustomEvent("show-form-response-error", r);
            this.element.dispatchEvent(i), this.hideSubmitButtonSpinner()
        }, e.prototype.handleFormInvalid = function(e) {
            return this.masterCardResponse = null, this.hideSubmitButtonSpinner(), Promise.reject(new Error(e))
        }, e.prototype.createNewPaymentSessionAndConfigure = function() {
            var e = this;
            return this.hostedSessionService.removeMastercardScript(), this.showSubmitButtonSpinner(), this.hostedSessionService.addPaymentSessionAfterPageReady(this.processFormSessionUpdate, this.needCardNumber).catch(function() {
                e.finaliseSubmit()
            })
        }, e.prototype.showSubmitButtonSpinner = function() {
            this.preventFormChanges = !0, this.spinnerClass = "spinner-circular", this.paypalDepositLoading = !0
        }, e.prototype.hideSubmitButtonSpinner = function() {
            this.preventFormChanges = !1, this.spinnerClass = "", this.paypalDepositLoading = !1
        }, e.prototype.findSelectedCard = function(e) {
            var t = this;
            return void 0 === e && (e = !1), e ? this.findCurrenltyNominatedCard() || "" : this.model.cards && this.model.cards.length > 0 ? this.model.card ? this.model.cards.find(function(e) {
                return e.CreditCardId === t.model.card.CreditCardId
            }) || this.model.cards[0] : this.model.cards[0] : this.model.selectedCard || ""
        }, e.prototype.findCurrenltyNominatedCard = function() {
            var e;
            return this.model.cards && this.model.cards.length > 0 && (e = this.model.cards.find(function(e) {
                return e.Authorised
            })), e
        }, e.prototype.showAddNewCardFields = function() {
            return !this.model.cards || this.model.cards.length <= 0 || "Visa" === this.model.cardSelector.selectedCard || "Mastercard" === this.model.cardSelector.selectedCard
        }, e.prototype.getCardSelectorModel = function(e) {
            return void 0 === e && (e = !1), {
                cards: this.model.cards || [],
                selectedCard: this.findSelectedCard(e),
                required: !0
            }
        }, e.prototype.getCardNumberModel = function() {
            return {
                cardNumber: this.model.cardNumber || "",
                selectedCardType: "Visa",
                masterCardResponse: this.masterCardResponse
            }
        }, e.prototype.getExpiryDateModel = function() {
            return {
                selectedMonth: this.model.selectedMonth || "",
                selectedYear: this.model.selectedYear || ""
            }
        }, e.prototype.getDepositAmountModel = function() {
            return {
                minDepositAmount: this.model.deposit || 1,
                populateDepositAmount: !0
            }
        }, e.prototype.getCardCvvModel = function() {
            return {
                cvv: this.model.cvv,
                masterCardResponse: this.masterCardResponse
            }
        }, e
    }();
    t.FormBase = o
}), define("service/credit-card-deposit/form-templates/index", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.configure = function(e) {
        e.aurelia.use.globalResources(["service/credit-card-deposit/form-templates/add-deposit-form/add-deposit-form", "service/credit-card-deposit/form-templates/add-edit-deposit-form/add-edit-deposit-form", "service/credit-card-deposit/form-templates/delete-form/delete-form", "service/credit-card-deposit/form-templates/deposit-form/deposit-form", "service/credit-card-deposit/form-templates/add-form/add-form", "service/credit-card-deposit/form-templates/edit-form/edit-form", "service/credit-card-deposit/form-templates/nominate-form/nominate-form", "service/credit-card-deposit/form-templates/deposit-limit-warning/deposit-limit-warning", "service/credit-card-deposit/form-templates/paypal-unknown-error/paypal-unknown-error", "service/credit-card-deposit/form-templates/user-unverified-warning/user-unverified-warning"])
    }
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/container-templates/account-dialog/account-dialog", ["require", "exports", "aurelia-framework", "aurelia-dialog"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e) {
            this.controller = e
        }
        return e.prototype.activate = function(e) {
            this.model = e, this.title = e.formType.title, this.hideCloseIcon = this.model.params.hideCloseIcon || !1, this.model.closeOnFormResponseError = !0, this.dialogIcon = this.model.params.dialogIcon || "cards"
        }, e.prototype.updateTitle = function(e) {
            this.title = e.response || this.model.formType.title
        }, Object.defineProperty(e.prototype, "accountIsSuspended", {
            get: function() {
                return this.model.aboutToBeSuspended
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.back = function() {
            this.model.formResponseError = null, this.model.formHeaderError = null, this.isUnverifiedError = !1
        }, __decorate([r.bindable, __metadata("design:type", Boolean)], e.prototype, "isUnverifiedError", void 0), e = __decorate([r.inject(i.DialogController), __metadata("design:paramtypes", [Object])], e)
    }();
    t.AccountDialog = o
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/container-templates/inline-deposit-dialog/inline-deposit-dialog", ["require", "exports", "aurelia-framework", "aurelia-dialog"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e) {
            this.controller = e, this.minDepositAmount = 1
        }
        return e.prototype.activate = function(e) {
            this.model = e, this.title = e.formType.title
        }, e.prototype.back = function() {
            this.model.formResponseError = null, this.model.formHeaderError = null, this.isUnverifiedError = !1
        }, Object.defineProperty(e.prototype, "accountIsSuspended", {
            get: function() {
                return this.model.aboutToBeSuspended
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([r.bindable, __metadata("design:type", Boolean)], e.prototype, "isUnverifiedError", void 0), e = __decorate([r.inject(i.DialogController), __metadata("design:paramtypes", [Object])], e)
    }();
    t.InlineDepositDialog = o
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-field-templates/card-cvv/card-cvv", ["require", "exports", "aurelia-framework", "aurelia-validation", "../../hosted-session-service"], function(e, t, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t, r) {
            this.element = e, this.validationController = t, this.hostedSessionService = r
        }
        return Object.defineProperty(e.prototype, "invalidErrorMessage", {
            get: function() {
                return "Please enter a valid ${$displayName}."
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.bind = function() {
            this.model = this.model || {}
        }, e.prototype.attached = function() {
            var e = this;
            i.ValidationRules.ensure(function(e) {
                return e.cvv
            }).displayName("CVV").satisfies(function(t) {
                return e.hostedSessionService.isValidCvvFromMastercard(e.model.masterCardResponse)
            }).withMessage(this.invalidErrorMessage).on(this.model), this.validationController.addObject(this.model)
        }, e.prototype.inlineUpdateSubmitted = function() {
            var e = new CustomEvent("inline-update-sumitted", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), e = __decorate([r.inject(Element, r.NewInstance.of(i.ValidationController), o.HostedSessionService), r.customElement("card-cvv"), __metadata("design:paramtypes", [Object, Object, Object])], e)
    }();
    t.CardCvv = n
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-field-templates/card-details/card-details", ["require", "exports", "aurelia-framework"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.cardChanged = function(e) {
            e && (this.formattedCardNumber = e.CardNumber.replace(/([0-9\*]{4})([0-9\*]{4})([0-9\*]{4})([0-9\*]{4})/, "$1 $2 $3 $4"))
        }, __decorate([r.bindable, __metadata("design:type", Object)], e.prototype, "card", void 0), e = __decorate([r.customElement("card-details")], e)
    }();
    t.CardDetails = i
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-field-templates/card-number/card-number", ["require", "exports", "aurelia-framework", "aurelia-validation", "../../hosted-session-service"], function(e, t, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            this.validationController = e, this.hostedSessionService = t
        }
        return Object.defineProperty(e.prototype, "invalidErrorMessage", {
            get: function() {
                return "Please enter a valid ${$displayName}."
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.bind = function() {
            this.model = this.model || {}
        }, e.prototype.attached = function() {
            var e = this;
            i.ValidationRules.ensure(function(e) {
                return e.cardNumber
            }).displayName("Card Number").satisfies(function(t) {
                return e.hostedSessionService.isValidCardFromMastercard(e.model.masterCardResponse, e.model.selectedCardType)
            }).withMessage(this.invalidErrorMessage).on(this.model), this.validationController.addObject(this.model)
        }, e.prototype.updateCardType = function(e) {
            this.model.selectedCardType = e, this.model.cardNumber && this.validationController.validate()
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), e = __decorate([r.inject(r.NewInstance.of(i.ValidationController), o.HostedSessionService), r.customElement("card-number"), __metadata("design:paramtypes", [Object, Object])], e)
    }();
    t.CardNumber = n
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-field-templates/card-selector/card-selector", ["require", "exports", "aurelia-framework", "aurelia-validation"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            this.element = e, this.validationController = t, this.hideName = !1
        }
        return e.prototype.bind = function() {
            this.model = this.model || {
                showUpdateLink: !1
            }
        }, e.prototype.selectCardDisplayName = function() {
            return this.model.cardDisplayName ? this.model.cardDisplayName : this.model.cards && this.model.cards.length > 0 ? "Card" : "Card Type"
        }, Object.defineProperty(e.prototype, "invalidErrorMessage", {
            get: function() {
                return "Please select a valid ${$displayName}."
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "cardDisplayName", {
            get: function() {
                return this.model ? this.selectCardDisplayName() : ""
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.attached = function() {
            i.ValidationRules.ensure(function(e) {
                return e.selectedCard
            }).displayName("Card").required().when(function(e) {
                return e.required
            }).withMessage(this.invalidErrorMessage).on(this.model), this.validationController.addObject(this.model)
        }, e.prototype.cardChoice = function(e) {
            var t = new CustomEvent("card-changed", {
                detail: {
                    value: e,
                    selectedCard: this.model.selectedCard
                },
                bubbles: !0
            });
            this.element.dispatchEvent(t)
        }, e.prototype.toggleUpdateSection = function() {
            var e = new CustomEvent("toggle-update-section", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.toView
        }), __metadata("design:type", Boolean)], e.prototype, "hideName", void 0), e = __decorate([r.inject(Element, r.NewInstance.of(i.ValidationController)), r.customElement("card-selector"), __metadata("design:paramtypes", [Object, Object])], e)
    }();
    t.CardSelector = o
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-field-templates/deposit-amount/deposit-amount", ["require", "exports", "aurelia-framework", "aurelia-validation"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t, r) {
            this.element = e, this.validationController = t, this.bindingEngine = r
        }
        return e.prototype.bind = function() {
            var e = this;
            this.label = this.label || "Deposit Amount", this.model = Object.assign({
                unverifiedCardMaxDepositAmount: 500,
                enforceMinDepositAmount: !0,
                showHelpText: !0,
                maxDepositAmount: 0
            }, this.model), this.updateDepositAmount(), this.watcher = this.bindingEngine.propertyObserver(this.model, "minDepositAmount").subscribe(function(t, r) {
                return e.updateDepositAmount()
            }), this.watcher = this.bindingEngine.propertyObserver(this.model, "populateDepositAmount").subscribe(function(t, r) {
                return e.updateDepositAmount()
            }), this.watcher = this.bindingEngine.propertyObserver(this.model, "maxDepositAmount").subscribe(function(t, r) {
                return e.updateDepositAmount()
            })
        }, e.prototype.detached = function() {
            this.watcher && this.watcher.dispose()
        }, e.prototype.updateDepositAmount = function() {
            this.model && this.model.enforceMinDepositAmount && (this.model.minDepositAmount = this.setMinDepositAmount(this.model.minDepositAmount || 1), this.model.depositAmount = this.model.populateDepositAmount ? this.model.minDepositAmount.toFixed(2) : "")
        }, e.prototype.setMinDepositAmount = function(e) {
            return Math.max(Math.round(100 * e) / 100, 1)
        }, e.prototype.setDepositLimits = function(e, t) {
            void 0 === e && (e = 0), void 0 === t && (t = 1), this.model.enforceMinDepositAmount = !1, this.model.showHelpText = !1, this.model.minDepositAmount = e, this.model.maxDepositAmount = t, this.model.depositAmount = ""
        }, Object.defineProperty(e.prototype, "minAmountErrorMessage", {
            get: function() {
                return "${$displayName} must be at least ${$this.minDepositAmount | formatCurrency:'$0,0.00'}."
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "maxAmountErrorMessage", {
            get: function() {
                return "${$displayName} must be less than ${($this.maxDepositAmount + 0.01) | formatCurrency:'$0,0.00'}."
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "unverifiedAccountMaxAmountErrorMessage", {
            get: function() {
                return "Maximum deposit of ${$this.unverifiedCardMaxDepositAmount | formatCurrency:'$0,0.00'} for unverified accounts."
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "invalidErrorMessage", {
            get: function() {
                return "Please enter a valid ${$displayName}."
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.attached = function() {
            var e = this;
            i.ValidationRules.ensure(function(e) {
                return e.depositAmount
            }).displayName(this.label).required().then().matches(/^(\d+(\.\d{0,2})?|\.\d{1,2})$/).withMessage(this.invalidErrorMessage).then().satisfies(function(t) {
                return t >= e.model.minDepositAmount
            }).withMessage(this.model.minDepositAmount > 0 ? this.minAmountErrorMessage : this.invalidErrorMessage).then().satisfies(function(t) {
                return 0 === e.model.maxDepositAmount || t <= e.model.maxDepositAmount
            }).withMessage(this.maxAmountErrorMessage).on(this.model), this.validationController.addObject(this.model)
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), __decorate([r.bindable, __metadata("design:type", Object)], e.prototype, "label", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "inputAmount", void 0), e = __decorate([r.inject(Element, r.NewInstance.of(i.ValidationController), r.BindingEngine), r.customElement("deposit-amount"), __metadata("design:paramtypes", [Object, Object, Object])], e)
    }();
    t.DepositAmount = o
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-field-templates/expiry-date/expiry-date", ["require", "exports", "aurelia-framework", "aurelia-validation", "moment"], function(e, t, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            this.element = e, this.validationController = t, this.currentYear = o().year(), this.currentMonth = o().month(), this.yearHasBeenTouched = !1, this.monthHasBeenTouched = !1, this.selectedMonthErrors = null, this.months = [{
                name: "01",
                value: 1,
                disabled: !1
            }, {
                name: "02",
                value: 2,
                disabled: !1
            }, {
                name: "03",
                value: 3,
                disabled: !1
            }, {
                name: "04",
                value: 4,
                disabled: !1
            }, {
                name: "05",
                value: 5,
                disabled: !1
            }, {
                name: "06",
                value: 6,
                disabled: !1
            }, {
                name: "07",
                value: 7,
                disabled: !1
            }, {
                name: "08",
                value: 8,
                disabled: !1
            }, {
                name: "09",
                value: 9,
                disabled: !1
            }, {
                name: "10",
                value: 10,
                disabled: !1
            }, {
                name: "11",
                value: 11,
                disabled: !1
            }, {
                name: "12",
                value: 12,
                disabled: !1
            }]
        }
        return e.prototype.bind = function() {
            this.model = this.model || {}, this.model.selectedMonth = this.model.selectedMonth || "", this.model.selectedYear = this.model.selectedYear || ""
        }, Object.defineProperty(e.prototype, "expiryDateLabel", {
            get: function() {
                return this.model && this.model.updateExpiryDate ? "New Expiry Date" : "Expiry Date"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "invalidErrorMessage", {
            get: function() {
                return "Please enter a valid ${$displayName}."
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.attached = function() {
            var e = this;
            i.ValidationRules.ensure(function(e) {
                return e.selectedMonth
            }).required().then().satisfies(function(t) {
                return e.isValidateExpiryDate()
            }).withMessage(this.invalidErrorMessage).on(this.model), this.validationController.addObject(this.model)
        }, e.prototype.validate = function() {
            var e = this;
            return this.selectedMonthErrors = null, this.validationController.validate().then(function(t) {
                return e.selectedMonthErrors = !1 === t.valid, t
            })
        }, e.prototype.isValidateExpiryDate = function() {
            var e = !1;
            if (this.model.selectedMonth && this.model.selectedYear) {
                e = o(this.model.selectedYear + "-" + this.model.selectedMonth.value, "YYYY-M").isValid() && (this.model.selectedYear > this.currentYear || this.model.selectedMonth.value > o().month())
            }
            return this.model.isValid = e, e
        }, e.prototype.bindMonth = function() {
            var e = this.model.selectedYear === this.currentYear;
            e && this.model.selectedMonth.value < this.currentMonth + 1 && (this.selectedMonth = "");
            var t;
            for (t = 0; t < this.months.length; t++) t < this.currentMonth ? this.months[t].disabled = e : this.months[t].disabled = !1
        }, e.prototype.yearChanged = function() {
            this.yearHasBeenTouched = !0, this.bindMonth(), this.validateIfBothChanged()
        }, e.prototype.monthChanged = function() {
            this.monthHasBeenTouched = !0, this.validateIfBothChanged()
        }, e.prototype.validateIfBothChanged = function() {
            var e = this;
            this.monthHasBeenTouched && this.yearHasBeenTouched && (this.selectedMonthErrors = null, this.validationController.validate().then(function(t) {
                e.selectedMonthErrors = !1 === t.valid
            }))
        }, e.prototype.inlineUpdateSubmitted = function() {
            var e = new CustomEvent("inline-update-sumitted", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), e = __decorate([r.inject(Element, r.NewInstance.of(i.ValidationController)), r.customElement("expiry-date"), __metadata("design:paramtypes", [Object, Object])], e)
    }();
    t.ExpiryDate = n
}), define("service/credit-card-deposit/form-field-templates/paypal-deposit-button/config", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PaypalButtonStyling = {
        color: "blue",
        shape: "pill",
        label: "pay",
        size: "responsive",
        tagline: "false",
        height: 44
    }, t.PaypalButtonId = "#paypal-deposit-button"
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        function o(e) {
            return e instanceof r ? e : new r(function(t) {
                t(e)
            })
        }
        return new(r || (r = Promise))(function(r, n) {
            function a(e) {
                try {
                    d(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    d(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function d(e) {
                e.done ? r(e.value) : o(e.value).then(a, s)
            }
            d((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(r) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; d;) try {
                if (o = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, r[1])).done) return a;
                switch (n = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                    case 0:
                    case 1:
                        a = r;
                        break;
                    case 4:
                        return d.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        d.label++, n = r[1], r = [0];
                        continue;
                    case 7:
                        r = d.ops.pop(), d.trys.pop();
                        continue;
                    default:
                        if (a = d.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            d = 0;
                            continue
                        }
                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            d.label = r[1];
                            break
                        }
                        if (6 === r[0] && d.label < a[1]) {
                            d.label = a[1], a = r;
                            break
                        }
                        if (a && d.label < a[2]) {
                            d.label = a[2], d.ops.push(r);
                            break
                        }
                        a[2] && d.ops.pop(), d.trys.pop();
                        continue
                }
                r = t.call(e, d)
            } catch (e) {
                r = [6, e], n = 0
            } finally {
                o = a = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var o, n, a, s, d = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/credit-card-deposit/form-field-templates/paypal-deposit-button/paypal-deposit-button", ["require", "exports", "aurelia-framework", "services/tatts-log", "services/tatts-event-service", "services/user-context", "services/paypal/paypal-service", "./config", "services/paypal/interfaces/paypal-config", "services/paypal/utils", "events/paypal/index"], function(e, t, r, i, o, n, a, s, d, c, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function t(e, t, r, i) {
            var o = this;
            this.paypalService = e, this.log = t, this.eventService = r, this.userContext = i, this.paypalEnabled = !1, this.scriptError = !1, this.reload = function() {
                document.getElementById("paypal-deposit-button").innerHTML = "", o.scriptError = !1, o.paypalEnabled = !1, o.loadBraintreeScripts()
            }, this.setPaypalAccount = function(e) {
                o.paypalAccount = e
            }
        }
        return t.prototype.attached = function() {
            this.paypalButtonDiv = document.getElementById(s.PaypalButtonId.replace("#", "")), this.loadBraintreeScripts()
        }, t.prototype.loadBraintreeScripts = function() {
            var t = this;
            e(["braintreeClient", "paypalCheckout"], function(e, r) {
                t.client = e, t.paypalCheckout = r, t.initPayPalButton()
            })
        }, t.prototype.initPayPalButton = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, r, i;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 5, , 6]), [4, this.paypalService.getClientTokenGetBySession(this.userContext.sessionId)];
                        case 1:
                            return e = o.sent().Token, [4, this.createBraintreeClient(e)];
                        case 2:
                            return t = o.sent(), [4, this.createPaypalCheckout(t)];
                        case 3:
                            return r = o.sent(), [4, this.createPaypalButton(r)];
                        case 4:
                            return o.sent(), this.enablePaypalButton(), [3, 6];
                        case 5:
                            return i = o.sent(), this.log.error("MyPaypal - initPayPalButton()", "Caught {error}", [i]), this.scriptError = !0, [3, 6];
                        case 6:
                            return [2]
                    }
                })
            })
        }, t.prototype.createBraintreeClient = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    return [2, this.client.create({
                        authorization: e
                    })]
                })
            })
        }, t.prototype.createPaypalCheckout = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    return [2, this.paypalCheckout.create({
                        client: e
                    })]
                })
            })
        }, t.prototype.createPaypalButton = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t, r = this;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return t = this, [4, paypal.Button.render({
                                env: c.getPaypalEnvironment(),
                                style: s.PaypalButtonStyling,
                                payment: function() {
                                    return e.createPayment(d.DefaultPaymentConfig)
                                },
                                onAuthorize: function(t, i) {
                                    return e.tokenizePayment(t).then(function(e) {
                                        return r.setPaypalAccount(e)
                                    })
                                },
                                onCancel: function(e) {
                                    r.userContext.setValue("paypal-connect-status", "false"), r.eventService.publishT(new l.PaypalConnectFailedEvent("ConnectPaypalCancelled"))
                                },
                                onError: function(e) {
                                    r.userContext.setValue("paypal-connect-status", "false"), r.eventService.publishT(new l.PaypalConnectFailedEvent("ConnectPaypalErrorThrown")), r.log.error("PaypalService - createPaypalButton()", "Caught {error}", [e])
                                }
                            }, s.PaypalButtonId)];
                        case 1:
                            return i.sent(), [2]
                    }
                })
            })
        }, t.prototype.enablePaypalButton = function() {
            this.paypalEnabled = !0
        }, __decorate([r.bindable, __metadata("design:type", Object)], t.prototype, "paypalAccount", void 0), t = __decorate([r.customElement("paypal-deposit-button"), r.containerless, r.autoinject, __metadata("design:paramtypes", [a.PaypalService, i.TattsLog, o.TattsEvent, n.UserContext])], t)
    }();
    t.PaypalDepositButton = u
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        function o(e) {
            return e instanceof r ? e : new r(function(t) {
                t(e)
            })
        }
        return new(r || (r = Promise))(function(r, n) {
            function a(e) {
                try {
                    d(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    d(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function d(e) {
                e.done ? r(e.value) : o(e.value).then(a, s)
            }
            d((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(r) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; d;) try {
                if (o = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, r[1])).done) return a;
                switch (n = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                    case 0:
                    case 1:
                        a = r;
                        break;
                    case 4:
                        return d.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        d.label++, n = r[1], r = [0];
                        continue;
                    case 7:
                        r = d.ops.pop(), d.trys.pop();
                        continue;
                    default:
                        if (a = d.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            d = 0;
                            continue
                        }
                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            d.label = r[1];
                            break
                        }
                        if (6 === r[0] && d.label < a[1]) {
                            d.label = a[1], a = r;
                            break
                        }
                        if (a && d.label < a[2]) {
                            d.label = a[2], d.ops.push(r);
                            break
                        }
                        a[2] && d.ops.pop(), d.trys.pop();
                        continue
                }
                r = t.call(e, d)
            } catch (e) {
                r = [6, e], n = 0
            } finally {
                o = a = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var o, n, a, s, d = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/credit-card-deposit/form-field-templates/radio-card-selector/radio-card-selector", ["require", "exports", "aurelia-framework", "aurelia-validation", "aurelia-binding", "services/user-context", "elements/editable-form/editable-form-saved-indicator/editable-form-saved-indicator", "../../credit-card-deposit-service", "../../credit-card-dialog-service", "services/paypal/paypal-service", "services/paypal/utils", "services/tatts-log", "moment", "../update-credit-card/update-credit-card"], function(e, t, r, i, o, n, a, s, d, c, l, u, p, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var h = function() {
        function e(e, t, r, i, o, n, a, s, d) {
            this.element = e, this.validationController = t, this.userContext = r, this.saveIndicator = i, this.bindingEngine = o, this.creditCardDeposit = n, this.creditCardDialog = a, this.paypalService = s, this.log = d, this.hideName = !1, this.showMoreOptions = !1, this.allVisible = !1, this.paypalEnabled = !1, this.paypalVaulted = !1, this.formLoading = !1, this.currentYear = p().year(), this.currentMonth = p().month()
        }
        return Object.defineProperty(e.prototype, "invalidErrorMessage", {
            get: function() {
                return "Please select a valid ${$displayName}."
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.attached = function() {
            var e = this;
            i.ValidationRules.ensure(function(e) {
                return e.selectedCard
            }).displayName("Card").required().when(function(e) {
                return e.required
            }).withMessage(this.invalidErrorMessage).on(this.model), this.validationController.addObject(this.model), this.isPaypalEnabled(), this.bindingEngine.propertyObserver(this.model, "selectedCard").subscribe(function(t) {
                return e.cardChoice(t)
            }), this.bindingEngine.propertyObserver(this.model, "otherCards").subscribe(function() {
                return e.setupCards()
            }), this.bindingEngine.propertyObserver(this.model, "editFinalised").subscribe(function() {
                return e.finishEdit(e.model.selectedCard)
            })
        }, e.prototype.cardChoice = function(e) {
            this.resetEditingCards(), this.hasSelectedCardExpired(e);
            var t = new CustomEvent("card-changed", {
                detail: {
                    value: e,
                    selectedCard: this.model.selectedCard
                },
                bubbles: !0
            });
            this.element.dispatchEvent(t)
        }, e.prototype.formLoaded = function() {
            var e = new CustomEvent("form-loaded", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, e.prototype.setupCards = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, r, i;
                return __generator(this, function(o) {
                    return e = this.model.cards, this.paypalVaulted = !!this.model.otherCards.paypal.Email, t = this.model.otherCards.paypal, r = this.model.otherCards.newVisa, i = this.model.otherCards.newMastercard, this.paypalEnabled ? e.length < 1 ? this.sortCardsNoCreditCard(this.model.cards, t, r, i) : 1 === e.length && this.paypalVaulted ? this.sortCardsOneCardPaypalVaulted(this.model.cards, t, r, i) : 1 !== e.length || this.paypalVaulted ? e.length > 1 && this.paypalVaulted ? this.sortCardsMultipleCardsPaypalVaulted(this.model.cards, t, r, i) : e.length > 1 && !this.paypalVaulted && this.sortCardsMultipleCardsPaypalUnvaulted(this.model.cards, t, r, i) : this.sortCardsOneCardPaypalUnvaulted(this.model.cards, t, r, i) : this.sortCardsPaypalDisabled(this.model.cards, r, i), this.model.selectedCard = e[0], this.checkExpired(e), this.hasSelectedCardExpired(this.model.selectedCard), this.formLoaded(), [2]
                })
            })
        }, e.prototype.sortCardsPaypalDisabled = function(e, t, r) {
            e.sort(this.sortCards("Authorised", this.model.selectedCard, this.model.nominatedCardNumber)), 0 !== e.length && 3 !== e.length || (this.allVisible = !0), e.length < 3 && e.push(t, r)
        }, e.prototype.sortCardsNoCreditCard = function(e, t, r, i) {
            e.push(t, r, i), this.allVisible = !0
        }, e.prototype.sortCardsOneCardPaypalVaulted = function(e, t, r, i) {
            "CreditCard" === this.model.autoplayMethod ? e.push(t) : e.unshift(t), e.push(r, i)
        }, e.prototype.sortCardsOneCardPaypalUnvaulted = function(e, t, r, i) {
            e.push(t, r, i)
        }, e.prototype.sortCardsMultipleCardsPaypalVaulted = function(e, t, r, i) {
            "CreditCard" === this.model.autoplayMethod ? (e.sort(this.sortCards("Nominated", this.model.selectedCard, this.model.nominatedCardNumber)), e.push(t)) : e.unshift(t), e.length <= 3 ? e.push(r, i) : this.allVisible = !0
        }, e.prototype.sortCardsMultipleCardsPaypalUnvaulted = function(e, t, r, i) {
            var o = !1;
            e.sort(this.sortCards("Authorised", this.model.selectedCard, this.model.nominatedCardNumber)), e[0].Authorised && (o = !0), o || e.sort(this.sortCards("Selected", this.model.selectedCard, this.model.nominatedCardNumber)), e.length < 3 ? e.push(t, r, i) : (e.push(t), this.allVisible = !0)
        }, e.prototype.checkExpired = function(e) {
            for (var t = 0, r = e; t < r.length; t++) {
                var i = r[t],
                    o = i.CardType,
                    n = i.ExpiryYear,
                    a = i.ExpiryMonth;
                "Visa" !== o && "MasterCard" !== o || (n < this.currentYear || n === this.currentYear && a < this.currentMonth ? i.Expired = !0 : i.Expired = !1)
            }
        }, e.prototype.hasSelectedCardExpired = function(e) {
            e && e.Expired && this.toggleEdit(e)
        }, e.prototype.sortCards = function(e, t, r) {
            return function(i, o) {
                if ("Authorised" === e) {
                    if (i.Authorised) return -1;
                    if (o.Authorised) return 1
                } else if ("Selected" === e) {
                    if (i === t) return -1;
                    if (o === t) return 1
                } else if ("Nominated" === e) {
                    if (i.CardNumber && i.CardNumber === r) return -1;
                    if (o.CardNumber && o.CardNumber === r) return 1
                }
                return 0
            }
        }, e.prototype.resetEditingCards = function() {
            for (var e = 0, t = this.model.cards; e < t.length; e++) {
                var r = t[e],
                    i = r.CardType;
                r.Editing;
                "Visa" !== i && "MasterCard" !== i || !1
            }
        }, e.prototype.toggleMoreOptions = function() {
            this.showMoreOptions = !this.showMoreOptions
        }, e.prototype.toggleEdit = function(e) {
            e.Editing = !e.Editing;
            var t = new CustomEvent("toggle-update-section", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(t)
        }, e.prototype.finishEdit = function(e) {
            e.Editing && (e.Editing = !1), e.Expired && (e.Expired = !1), this.model.editFinalised = !1, this.saveIndicator.appear()
        }, e.prototype.canUsePaypal = function() {
            return !(!this.userContext || !this.userContext.homeAddress) && ("Australia" === this.userContext.homeAddress.country || "New Zealand" === this.userContext.homeAddress.country)
        }, e.prototype.isPaypalEnabled = function() {
            this.paypalEnabled = l.isPaypalEnabled() && this.canUsePaypal()
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.toView
        }), __metadata("design:type", Boolean)], e.prototype, "hideName", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", m.UpdateCreditCard)], e.prototype, "updateCreditCardVm", void 0), e = __decorate([r.inject(Element, r.NewInstance.of(i.ValidationController), n.UserContext, a.EditableFormSavedIndicator, o.BindingEngine, s.CreditCardDepositService, d.CreditCardDialogService, c.PaypalService, u.TattsLog), r.customElement("radio-card-selector"), __metadata("design:paramtypes", [Object, i.ValidationController, n.UserContext, a.EditableFormSavedIndicator, o.BindingEngine, s.CreditCardDepositService, d.CreditCardDialogService, c.PaypalService, u.TattsLog])], e)
    }();
    t.RadioCardSelector = h
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        function o(e) {
            return e instanceof r ? e : new r(function(t) {
                t(e)
            })
        }
        return new(r || (r = Promise))(function(r, n) {
            function a(e) {
                try {
                    d(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    d(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function d(e) {
                e.done ? r(e.value) : o(e.value).then(a, s)
            }
            d((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(r) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; d;) try {
                if (o = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, r[1])).done) return a;
                switch (n = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                    case 0:
                    case 1:
                        a = r;
                        break;
                    case 4:
                        return d.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        d.label++, n = r[1], r = [0];
                        continue;
                    case 7:
                        r = d.ops.pop(), d.trys.pop();
                        continue;
                    default:
                        if (a = d.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            d = 0;
                            continue
                        }
                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            d.label = r[1];
                            break
                        }
                        if (6 === r[0] && d.label < a[1]) {
                            d.label = a[1], a = r;
                            break
                        }
                        if (a && d.label < a[2]) {
                            d.label = a[2], d.ops.push(r);
                            break
                        }
                        a[2] && d.ops.pop(), d.trys.pop();
                        continue
                }
                r = t.call(e, d)
            } catch (e) {
                r = [6, e], n = 0
            } finally {
                o = a = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var o, n, a, s, d = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/credit-card-deposit/form-field-templates/update-credit-card/update-credit-card", ["require", "exports", "aurelia-framework", "aurelia-validation", "aurelia-binding", "../../hosted-session-service", "moment"], function(e, t, r, i, o, n, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t, r, i) {
            this.element = e, this.validationController = t, this.hostedSessionService = r, this.bindingEngine = i, this.currentYear = a().year(), this.currentMonth = a().month(), this.yearHasBeenTouched = !1, this.monthHasBeenTouched = !1, this.selectedMonthErrors = null, this.cvvErrors = null, this.cardWasSaved = !1, this.responseReceived = !1, this.months = [{
                name: "01",
                value: 1,
                disabled: !1
            }, {
                name: "02",
                value: 2,
                disabled: !1
            }, {
                name: "03",
                value: 3,
                disabled: !1
            }, {
                name: "04",
                value: 4,
                disabled: !1
            }, {
                name: "05",
                value: 5,
                disabled: !1
            }, {
                name: "06",
                value: 6,
                disabled: !1
            }, {
                name: "07",
                value: 7,
                disabled: !1
            }, {
                name: "08",
                value: 8,
                disabled: !1
            }, {
                name: "09",
                value: 9,
                disabled: !1
            }, {
                name: "10",
                value: 10,
                disabled: !1
            }, {
                name: "11",
                value: 11,
                disabled: !1
            }, {
                name: "12",
                value: 12,
                disabled: !1
            }]
        }
        return e.prototype.bind = function() {
            this.model = this.model || {}, this.model.selectedMonth = this.model.selectedMonth || "", this.model.selectedYear = this.model.selectedYear || ""
        }, Object.defineProperty(e.prototype, "invalidErrorMessage", {
            get: function() {
                return "Please enter a valid ${$displayName}."
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.attached = function() {
            var e = this;
            i.ValidationRules.ensure(function(e) {
                return e.selectedMonth
            }).required().then().satisfies(function(t) {
                return e.isValidateExpiryDate()
            }).withMessage(this.invalidErrorMessage).withMessage(this.invalidErrorMessage).ensure(function(e) {
                return e.selectedYear
            }).required().withMessage(this.invalidErrorMessage).ensure(function(e) {
                return e.cvv
            }).displayName("CVV").satisfies(function(t) {
                return e.hostedSessionService.isValidCvvFromMastercard(e.model.masterCardResponse)
            }).withMessage(this.invalidErrorMessage).on(this.model), this.validationController.addObject(this.model)
        }, e.prototype.detached = function() {
            this.monthHasBeenTouched = !1, this.yearHasBeenTouched = !1
        }, e.prototype.validate = function() {
            var e = this;
            return this.selectedMonthErrors = null, this.validationController.validate().then(function(t) {
                return e.selectedMonthErrors = !1 === t.valid, t
            })
        }, e.prototype.isValidateExpiryDate = function() {
            var e = !1;
            if (this.model.selectedMonth && this.model.selectedYear) {
                e = a(this.model.selectedYear + "-" + this.model.selectedMonth.value, "YYYY-M").isValid() && (this.model.selectedYear > this.currentYear || this.model.selectedMonth.value > a().month())
            }
            return this.model.isValid = e, e
        }, e.prototype.bindMonth = function() {
            var e = this,
                t = this.model.selectedYear === this.currentYear;
            t && this.model.selectedMonth.value < this.currentMonth + 1 && (this.selectedMonth = ""), this.months.map(function(r, i) {
                return i < e.currentMonth ? r.disabled = t : r.disabled = !1, r
            })
        }, e.prototype.yearChanged = function() {
            this.yearHasBeenTouched = !0, this.bindMonth(), this.validateIfBothChanged()
        }, e.prototype.monthChanged = function() {
            this.monthHasBeenTouched = !0, this.validateIfBothChanged()
        }, e.prototype.validateIfBothChanged = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.monthHasBeenTouched && this.yearHasBeenTouched ? (this.selectedMonthErrors = null, [4, this.validationController.validate()]) : [3, 2];
                        case 1:
                            e = t.sent(), this.selectedMonthErrors = !1 === e.valid, t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, e.prototype.save = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.validate()];
                        case 1:
                            return e = t.sent(), e.valid && this.inlineUpdateSubmitted(), [2]
                    }
                })
            })
        }, e.prototype.inlineUpdateSubmitted = function() {
            var e = new CustomEvent("inline-update-sumitted", {
                detail: {},
                bubbles: !0
            });
            this.element.dispatchEvent(e)
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Boolean)], e.prototype, "expired", void 0), e = __decorate([r.inject(Element, r.NewInstance.of(i.ValidationController), n.HostedSessionService, o.BindingEngine), r.customElement("update-credit-card"), __metadata("design:paramtypes", [Object, Object, Object, Object])], e)
    }();
    t.UpdateCreditCard = s
});
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-templates/add-deposit-form/add-deposit-form", ["require", "exports", "aurelia-framework", "../../credit-card-deposit-service", "../../hosted-session-service", "../../../../service/credit-card-deposit/credit-card-actions", "../form-base", "aurelia-configuration", "services/paypal/paypal-service", "services/user-context", "services/tatts-log", "services/tatts-event-service"], function(e, t, r, i, o, n, a, s, d, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function(e) {
        function t(t, r, i, o, a, s, d, c, l) {
            var u = e.call(this, t, r, i, o, a, s, d, c, l) || this;
            return u.formType = n.CreditCardActions.AddDeposit, u
        }
        return __extends(t, e), t.prototype.bind = function() {
                this.model.cardSelector = {
                    cardDisplayName: "Deposit using my"
                }, this.model.cardNumber = {}, this.model.expiryDate = {}, this.model.depositAmount = {}, this.model.cardCvv = {}
            }, t.prototype.loadForm = function() {
                var e = this;
                return this.createNewPaymentSessionAndConfigure().then(function() {
                    e.model.cardSelector = Object.assign(e.model.cardSelector, e.getCardSelectorModel()), e.model.cardNumber = Object.assign(e.model.cardNumber, e.getCardNumberModel()), e.model.expiryDate = Object.assign(e.model.expiryDate, e.getExpiryDateModel()), e.model.depositAmount = Object.assign(e.model.depositAmount, e.getDepositAmountModel(), {
                        populateDepositAmount: !1
                    }), e.model.cardCvv = Object.assign(e.model.cardCvv, e.getCardCvvModel())
                })
            }, t.prototype.formIsValid = function() {
                return Promise.all([this.cardSelectorVm.validationController.validate(), this.cardNumberVm.validationController.validate(), this.expiryDateVm.validate(), this.cardCvvVm.validationController.validate(), this.depositAmountVm.validationController.validate()]).then(function(e) {
                    return !e.find(function(e) {
                        return !1 === e.valid
                    })
                })
            }, t.prototype.submit = function() {
                var e = this;
                if (!this.preventFormChanges) return this.showSubmitButtonSpinner(), this.expiryDateIsValid().then(function(t) {
                    return t && e.hostedSessionService.submitPaymentSession()
                })
            }, t.prototype.submitTokenised = function() {
                var e = this;
                return this.formIsValid().then(function(t) {
                    return t ? e.creditCardDepositService.addDepositCreditCardTokenised(e.masterCardResponse.session.id, e.masterCardResponse.session.version, e.model.depositAmount.depositAmount, e.model.recurringPay, e.masterCardResponse.sourceOfFunds.provided.card.brand, e.model.sessionId, e.model.webClientId).then(function(t) {
                        return e.finaliseSubmit(t, e.model.depositAmount.depositAmount)
                    }).catch(function(t) {
                        return e.showFormResponseError(t, e.model.depositAmount.depositAmount)
                    }) : e.handleFormInvalid("addDepositTokenised - Please provide a valid result.")
                })
            }, __decorate([r.bindable({
                defaultBindingMode: r.bindingMode.twoWay
            }), __metadata("design:type", Object)], t.prototype, "model", void 0),
            t = __decorate([r.inject(Element, i.CreditCardDepositService, o.HostedSessionService, s.AureliaConfiguration, d.PaypalService, c.UserContext, l.TattsLog, u.TattsEvent, r.BindingEngine), r.customElement("add-deposit-form"), __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])], t)
    }(a.FormBase);
    t.AddDepositForm = p
});
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        function o(e) {
            return e instanceof r ? e : new r(function(t) {
                t(e)
            })
        }
        return new(r || (r = Promise))(function(r, n) {
            function a(e) {
                try {
                    d(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    d(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function d(e) {
                e.done ? r(e.value) : o(e.value).then(a, s)
            }
            d((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(r) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; d;) try {
                if (o = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, r[1])).done) return a;
                switch (n = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                    case 0:
                    case 1:
                        a = r;
                        break;
                    case 4:
                        return d.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        d.label++, n = r[1], r = [0];
                        continue;
                    case 7:
                        r = d.ops.pop(), d.trys.pop();
                        continue;
                    default:
                        if (a = d.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            d = 0;
                            continue
                        }
                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            d.label = r[1];
                            break
                        }
                        if (6 === r[0] && d.label < a[1]) {
                            d.label = a[1], a = r;
                            break
                        }
                        if (a && d.label < a[2]) {
                            d.label = a[2], d.ops.push(r);
                            break
                        }
                        a[2] && d.ops.pop(), d.trys.pop();
                        continue
                }
                r = t.call(e, d)
            } catch (e) {
                r = [6, e], n = 0
            } finally {
                o = a = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var o, n, a, s, d = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/credit-card-deposit/form-templates/add-edit-deposit-form/add-edit-deposit-form", ["require", "exports", "aurelia-framework", "../../credit-card-deposit-service", "../../hosted-session-service", "../form-base", "../../../../service/credit-card-deposit/credit-card-actions", "aurelia-configuration", "services/paypal/paypal-service", "services/paypal/utils", "services/user-context", "services/tatts-log", "services/tatts-event-service", "services/tatts-math", "events/paypal/index", "events/credit-cards"], function(e, t, r, i, o, n, a, s, d, c, l, u, p, m, h, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var g = {
            None: 0,
            Add: 1,
            Edit: 2
        },
        v = {
            error: 3303,
            message: "Sorry, your request was not successful as there is no record of your PayPal account. Please close this dialog and click the BUY TICKETS button again."
        },
        b = function(t) {
            function n(e, r, i, o, n, s, d, c, l) {
                var u = t.call(this, e, r, i, o, n, s, d, c, l) || this;
                return u.addNewCard = !1, u.updateVisible = !1, u.formLoading = !0, u.submitButtonText = "DEPOSIT AND BUY", u.hostedSessionState = g.None, u.paypalEnabled = !1, u.paypalVaulted = !1, u.attemptedSubmit = !1, u.paypalOrignallyVaulted = !1, u.paypalUnavailable = !1, u.overriddenSubmit = function() {
                    u.attemptedSubmit && u.paypalVaulted && u.submit()
                }, u.showDialogError = function(e) {
                    u.showFormHeaderError("Uh oh...", e, "error")
                }, u.formType = a.CreditCardActions.AddEditDeposit, u
            }
            return __extends(n, t), n.prototype.bind = function() {
                var e = this;
                this.model.cardSelector = {
                    cardDisplayName: "Deposit using my"
                }, this.model.cardNumber = {}, this.model.expiryDate = {
                    updateExpiryDate: !1
                }, this.model.depositAmount = {
                    showHelpText: !0
                }, this.model.cardCvv = {}, this.bindingEngine.propertyObserver(this.model, "userOverriddenLimit").subscribe(function() {
                    return e.overriddenSubmit()
                })
            }, n.prototype.loadForm = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.populateCards()];
                            case 1:
                                return e.sent(), [4, this.isPaypalEnabled()];
                            case 2:
                                return e.sent(), this.paypalEnabled ? [4, this.retrievePaypal()] : [3, 5];
                            case 3:
                                return e.sent(), [4, this.loadBraintreeScripts()];
                            case 4:
                                e.sent(), e.label = 5;
                            case 5:
                                return this.populateOtherCards(), (this.addNewCard = this.showAddNewCardFields(), this.addNewCard) ? (this.hostedSessionState = g.Add, [4, this.createNewPaymentSessionAndConfigure()]) : [3, 7];
                            case 6:
                                e.sent(), e.label = 7;
                            case 7:
                                return this.model.cardSelector = Object.assign(this.model.cardSelector, this.getCardSelectorModel()), this.model.cardNumber = Object.assign(this.model.cardNumber, this.getCardNumberModel()), this.model.expiryDate = Object.assign(this.model.expiryDate, this.getExpiryDateModel()), this.model.depositAmount = Object.assign(this.model.depositAmount, this.getDepositAmountModel()), this.model.cardCvv = Object.assign(this.model.cardCvv, this.getCardCvvModel()), this.updateState(), this.hideSubmitButtonSpinner(), [2]
                        }
                    })
                })
            }, n.prototype.formLoaded = function() {
                this.formLoading = !1
            }, n.prototype.populateOtherCards = function() {
                this.cardSelectorVm.model.otherCards = {
                    paypal: {
                        CardType: "PayPal",
                        Email: this.paypalEmail
                    },
                    newVisa: "Visa",
                    newMastercard: "Mastercard"
                }
            }, n.prototype.onSelectedCardChanged = function(e) {
                this.hideFormHeaderError(), t.prototype.onSelectedCardChanged.call(this, e), this.updateState(), this.model.cardNumber.selectedCardType = e.detail.value;
                var r = this.cardSelectorVm.model.selectedCard;
                "MasterCard" !== r.CardType && "Visa" !== r.CardType || (this.cardSelectorVm.model.selectedCard.Editing = !1), this.updateVisible && this.toggleCardUpdateSection(), this.addNewCard && this.toggleNewCardSection()
            }, n.prototype.updateState = function() {
                this.addNewCard = this.showAddNewCardFields(), this.updateVisible = !this.addNewCard && this.updateVisible, this.model.cardSelector.showUpdateLink = !this.addNewCard, this.model.cardSelector.updateVisible = this.updateVisible, this.model.expiryDate.updateVisible = this.updateVisible, this.model.expiryDate.updateExpiryDate = this.updateVisible, this.model.cardCvv.updateVisible = this.updateVisible, this.needCardNumber = !this.updateVisible
            }, n.prototype.toggleCardUpdateSection = function() {
                var e = this;
                if (this.hostedSessionState === g.None && !0 === this.updateVisible) return null;
                this.cardSelectorVm.model.selectedCard.Expired && (this.removeSecurityCode(), this.hostedSessionState = g.None, this.updateVisible = !1), this.updateVisible = !this.updateVisible, this.updateVisible || (this.hostedSessionState = 0, this.removeSecurityCode()), (this.updateVisible && this.hostedSessionState !== g.Edit || this.model.cardSelector.editFinalised) && this.onFormUnloaded(), this.model.expiryDate.updateVisible = this.updateVisible, this.model.expiryDate.updateExpiryDate = this.updateVisible, this.model.cardCvv.updateVisible = this.updateVisible, this.model.cardSelector.updateVisible = this.updateVisible, this.needCardNumber = !this.updateVisible, (this.updateVisible && this.hostedSessionState !== g.Edit || this.model.cardSelector.editFinalised) && this.createNewPaymentSessionAndConfigure().then(function() {
                    e.hostedSessionState = g.Edit, e.onFormLoaded()
                })
            }, n.prototype.toggleNewCardSection = function() {
                var e = this;
                this.hostedSessionState !== g.Add && (this.onFormUnloaded(), this.createNewPaymentSessionAndConfigure().then(function() {
                    e.hostedSessionState = g.Add, e.cardCvvVm.validationController.reset(), e.expiryDateVm.model.selectedMonth = null, e.expiryDateVm.model.selectedYear = null, e.onFormLoaded()
                }))
            }, n.prototype.submit = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t = this;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return this.preventFormChanges ? [3, 8] : (this.showSubmitButtonSpinner(), [4, this.depositFormIsValid()]);
                            case 1:
                                return (e = r.sent()) ? this.addNewCard ? (this.masterCardResponse = null, [4, this.hostedSessionService.submitPaymentSession()]) : [3, 3] : [3, 7];
                            case 2:
                                return r.sent(), [3, 6];
                            case 3:
                                return "PayPal" !== this.model.cardSelector.selectedCard.CardType ? [3, 5] : [4, this.submitPaypal()];
                            case 4:
                                return r.sent(), [3, 6];
                            case 5:
                                this.creditCardDepositService.requestCreditCardDepositTokenised(this.model.cardSelector.selectedCard.CreditCardId, this.model.cardSelector.selectedCard.CardType, this.model.depositAmount.depositAmount, this.model.recurringPay, this.model.sessionId).then(function(e) {
                                    return t.finaliseSubmit(e, t.model.depositAmount.depositAmount)
                                }).catch(function(e) {
                                    return t.showFormResponseError(e, t.model.depositAmount.depositAmount)
                                }), r.label = 6;
                            case 6:
                                return [3, 8];
                            case 7:
                                this.hideSubmitButtonSpinner(), r.label = 8;
                            case 8:
                                return [2]
                        }
                    })
                })
            }, n.prototype.save = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.expiryDateVm.yearHasBeenTouched = !0, (this.expiryDateVm.monthHasBeenTouched = !0, this.expiryDateVm.model.selectedMonth = this.cardSelectorVm.model.updateCreditCard.selectedMonth, this.expiryDateVm.model.selectedYear = this.cardSelectorVm.model.updateCreditCard.selectedYear, this.cardCvvVm.model.cvv = this.cardSelectorVm.model.updateCreditCard.cvv, this.preventFormChanges || !this.model.cardSelector.selectedCard.CreditCardId) ? [3, 2] : (this.masterCardResponse = null, [4, this.hostedSessionService.submitPaymentSession()]);
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return this.hideSubmitButtonSpinner(), [2]
                        }
                    })
                })
            }, n.prototype.submitTokenised = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        return this.addNewCard ? this.submitAddCard() : this.submitEditCard(), [2]
                    })
                })
            }, n.prototype.submitAddCard = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.addNewCardAndDepositFormIsValid()];
                            case 1:
                                if (!(e = i.sent())) return [3, 6];
                                i.label = 2;
                            case 2:
                                return i.trys.push([2, 4, , 5]), [4, this.creditCardDepositService.addDepositCreditCardTokenised(this.masterCardResponse.session.id, this.masterCardResponse.session.version, this.model.depositAmount.depositAmount, this.model.recurringPay, this.masterCardResponse.sourceOfFunds.provided.card.brand, this.model.sessionId, this.model.webClientId)];
                            case 3:
                                return t = i.sent(), this.finaliseSubmit(t, this.model.depositAmount.depositAmount), [3, 5];
                            case 4:
                                return r = i.sent(), this.log.error("AddEditDepositForm - submitAddCard()", "Caught {error}", [r]), this.showFormResponseError(r, this.model.depositAmount.depositAmount), [3, 5];
                            case 5:
                                return [3, 7];
                            case 6:
                                this.hideSubmitButtonSpinner(), i.label = 7;
                            case 7:
                                return [2]
                        }
                    })
                })
            }, n.prototype.submitEditCard = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.inlineUpdateFormIsValid()];
                            case 1:
                                if (!(e = i.sent())) return [3, 6];
                                i.label = 2;
                            case 2:
                                return i.trys.push([2, 4, , 5]), [4, this.creditCardDepositService.updateCreditCardTokenised(this.model.cardSelector.selectedCard.CreditCardId, this.masterCardResponse.session.id, this.masterCardResponse.session.version, this.model.recurringPay, this.model.sessionId, this.model.webClientId)];
                            case 3:
                                return t = i.sent(), (this.cardSelectorVm.updateCreditCardVm.responseReceived = !0, t.Success) ? (this.resetModel(), this.hideFormHeaderError(), [3, 5]) : [2, this.finaliseSubmit(t)];
                            case 4:
                                return r = i.sent(), this.log.error("AddEditDepositForm - submitEditCard()", "Caught {error}", [r]), this.showFormResponseError(r, this.model.depositAmount.depositAmount), [3, 5];
                            case 5:
                                return [3, 7];
                            case 6:
                                this.cardSelectorVm.updateCreditCardVm.cvvErrors = this.cardCvvVm.cvvErrors, i.label = 7;
                            case 7:
                                return [2]
                        }
                    })
                })
            }, n.prototype.submitPaypal = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (this.hasFormErrors) return [3, 11];
                                this.attemptedSubmit = !0, r.label = 1;
                            case 1:
                                return r.trys.push([1, 9, , 10]), this.paypalVaulted ? [3, 3] : [4, this.addAccount()];
                            case 2:
                                if (r.sent(), !this.paypalAccount) return [2];
                                r.label = 3;
                            case 3:
                                return e = this, [4, this.retrieveDeviceData()];
                            case 4:
                                return e.deviceData = r.sent(), this.deviceData ? [4, this.checkSpendLimit(this.model.depositAmount.depositAmount)] : [3, 8];
                            case 5:
                                return r.sent(), this.spendLimitExceeded && !this.model.userOverriddenLimit ? [3, 7] : [4, this.makePaypalDeposit()];
                            case 6:
                                return r.sent(), [3, 8];
                            case 7:
                                this.hideSubmitButtonSpinner(), r.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                return t = r.sent(), this.log.error("AddEditDepositForm - submitPaypal()", "Caught {error}", [t]), this.showFormResponseError(t, this.model.depositAmount.depositAmount), [3, 10];
                            case 10:
                                return [3, 12];
                            case 11:
                                this.hideSubmitButtonSpinner(), r.label = 12;
                            case 12:
                                return [2]
                        }
                    })
                })
            }, Object.defineProperty(n.prototype, "hasFormErrors", {
                get: function() {
                    return !this.depositAmountVm.depositAmountErrors || this.depositAmountVm.depositAmountErrors.length > 0 || "" === this.model.depositAmount.depositAmount
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.retrievePaypal = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, this.paypalService.getAccount(this.userContext.sessionId)];
                            case 1:
                                return e = r.sent(), this.paypalVaulted = e.Paypal && null !== e.Paypal.PaypalEmail, this.paypalVaulted && (this.paypalEmail = e.Paypal.PaypalEmail), this.paypalOrignallyVaulted = this.paypalVaulted, [3, 3];
                            case 2:
                                return t = r.sent(), this.log.error("AddEditDepositForm - retrievePaypal()", "Caught {error}", [t]), this.showFormResponseError(t, this.model.depositAmount.depositAmount), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, n.prototype.loadBraintreeScripts = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var t = this;
                    return __generator(this, function(r) {
                        return e(["braintreeClient", "dataCollector", "paypalCheckout"], function(e, r, i) {
                            return __awaiter(t, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    return this.client = e, this.dataCollector = r, this.checkout = i, [2]
                                })
                            })
                        }, function(e) {
                            t.disablePaypal()
                        }), this.kount = this.getPaypalEnv(), [2]
                    })
                })
            }, n.prototype.getPaypalEnv = function() {
                return "sandbox" !== (window.lottPaypal && window.lottPaypal.env || "sandbox")
            }, n.prototype.retrieveDeviceData = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r, i;
                    return __generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 4, , 5]), [4, this.paypalService.getClientTokenGetBySession(this.userContext.sessionId)];
                            case 1:
                                return e = o.sent().Token, [4, this.client.create({
                                    authorization: e
                                })];
                            case 2:
                                return t = o.sent(), [4, this.dataCollector.create({
                                    client: t,
                                    kount: this.kount,
                                    paypal: !0
                                })];
                            case 3:
                                return r = o.sent(), [2, r.deviceData];
                            case 4:
                                return i = o.sent(), this.log.error("AddEditDepositForm - retrieveDeviceData()", "Caught {error}", [i]), this.showFormResponseError(i, this.model.depositAmount.depositAmount), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })
            }, n.prototype.addAccount = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, this.paypalService.addAccount(this.userContext.sessionId, this.paypalAccount, !1)];
                            case 1:
                                return e = r.sent(), e.Success ? (this.paypalVaulted = !0, this.updateEmail(), this.userContext.setValue("paypal-connect-status", "true"), this.eventService.publishT(new h.PaypalConnectEvent("Checkout"))) : (this.paypalAccount = null, this.userContext.setValue("paypal-connect-status", "false"), this.eventService.publishT(new h.PaypalConnectFailedEvent(e.ErrorInfo.DisplayMessage)), 3302 === e.ErrorInfo.ErrorNo ? this.loadForm() : this.finaliseSubmit(e, this.model.depositAmount.depositAmount)), [3, 3];
                            case 2:
                                return t = r.sent(), this.userContext.setValue("paypal-connect-status", "false"), this.eventService.publishT(new h.PaypalConnectFailedEvent("Network Error - addAccount")), this.log.error("AddEditDepositForm - addAccount()", "Caught {error}", [t]), this.showFormResponseError(t, this.model.depositAmount.depositAmount), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, n.prototype.makePaypalDeposit = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r, i;
                    return __generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (!this.paypalVaulted) return this.hideSubmitButtonSpinner(), [2];
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, this.paypalService.deposit(this.userContext.sessionId, parseFloat(this.model.depositAmount.depositAmount), this.deviceData, !1)];
                            case 2:
                                return e = o.sent(), e.Success ? (t = parseFloat(this.model.depositAmount.depositAmount), r = parseFloat(this.userContext.accountTotalBalance), this.userContext.setValue("paypal-connect-status", "true"), this.eventService.publishT(new f.CreditCardDepositSuccessEvent(t, m.TattsMath.addCurrency(r, t), r, "Paypal", "Checkout")), this.finaliseSubmit(e, this.model.depositAmount.depositAmount)) : (this.eventService.publishT(new h.PaypalDepositFailureEvent(e.ErrorInfo.DisplayMessage)), e.ErrorInfo.ErrorNo === v.error ? this.showDialogError(v.message) : this.paypalOrignallyVaulted || 4 !== e.ErrorInfo.ErrorNo ? this.finaliseSubmit(e, this.model.depositAmount.depositAmount) : (this.triggerPaypalVaultedUnknownDepositError(), this.hideSubmitButtonSpinner())), [3, 4];
                            case 3:
                                return i = o.sent(), this.eventService.publishT(new h.PaypalDepositFailureEvent("Network Error - makeDeposit")), this.log.error("AddEditDepositForm - makePaypalDeposit()", "Caught {error}", [i]), this.showFormResponseError(i, this.model.depositAmount.depositAmount), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, n.prototype.canUsePaypal = function() {
                return !(!this.userContext || !this.userContext.homeAddress) && ("Australia" === this.userContext.homeAddress.country || "New Zealand" === this.userContext.homeAddress.country)
            }, n.prototype.isPaypalEnabled = function() {
                this.paypalEnabled = c.isPaypalEnabled() && this.canUsePaypal()
            }, n.prototype.removeSecurityCode = function() {
                var e = document.querySelector(".gw-proxy-securityCode");
                e && e.parentNode.removeChild(e)
            }, n.prototype.updateEmail = function() {
                this.paypalVaulted = !0, this.paypalEmail = this.maskEmail(this.paypalAccount.details.email), this.cardSelectorVm.model.cards.find(function(e) {
                    return "PayPal" === e.CardType
                }).Email = this.paypalEmail
            }, n.prototype.checkSpendLimit = function(e) {
                return __awaiter(this, void 0, void 0, function() {
                    var t, r;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 3, , 4]), "PayPal" !== this.model.cardSelector.selectedCard.CardType || this.model.userOverriddenLimit || !e ? [3, 2] : [4, this.paypalService.validate(this.userContext.sessionId, parseFloat(e))];
                            case 1:
                                if (t = i.sent(), !t.Success) return this.spendLimitExceeded = !1, [2, this.showDialogError(t.ErrorInfo.DisplayMessage)];
                                t.DepositOverSpendLimit ? this.model.userOverriddenLimit || (this.spendLimitExceeded = !0, this.triggerSpendLimitExceeded(t.Message), this.paypalOrignallyVaulted || this.updateEmail()) : this.spendLimitExceeded = !1, i.label = 2;
                            case 2:
                                return [3, 4];
                            case 3:
                                return r = i.sent(), this.log.error("AddEditDepositForm - checkSpendLimit()", "Caught {error}", [r]), this.showFormResponseError(r, this.model.depositAmount.depositAmount), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, n.prototype.triggerSpendLimitExceeded = function(e) {
                var t = new CustomEvent("spend-limit-exceeded", {
                    detail: {
                        message: e
                    },
                    bubbles: !0
                });
                this.element.dispatchEvent(t)
            }, n.prototype.triggerPaypalVaultedUnknownDepositError = function() {
                var e = new CustomEvent("vaulted-unknown-error", {
                    detail: {
                        message: "Your PayPal account has been connected but we were unable to complete your deposit. No funds were transferred."
                    },
                    bubbles: !0
                });
                this.element.dispatchEvent(e)
            }, n.prototype.paypalAccountChanged = function(e) {
                e && this.submit()
            }, n.prototype.maskEmail = function(e) {
                var t = e.split("@");
                return t[0].slice(0, 2) + "*".repeat(5) + "@" + t[1]
            }, n.prototype.disablePaypal = function() {
                this.paypalUnavailable = !0
            }, n.prototype.addNewCardAndDepositFormIsValid = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r, i, o, n;
                    return __generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return this.cardNumberVm.validationController.reset(), [4, this.cardSelectorVm.validationController.validate()];
                            case 1:
                                return e = a.sent(), [4, this.cardNumberVm.validationController.validate()];
                            case 2:
                                return t = a.sent(), [4, this.expiryDateVm.validate()];
                            case 3:
                                return r = a.sent(), [4, this.cardCvvVm.validationController.validate()];
                            case 4:
                                return i = a.sent(), [4, this.depositAmountVm.validationController.validate()];
                            case 5:
                                return o = a.sent(), n = [e, t, r, i, o], [2, !n.find(function(e) {
                                    return !1 === e.valid
                                })]
                        }
                    })
                })
            }, n.prototype.depositFormIsValid = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.cardSelectorVm.validationController.validate()];
                            case 1:
                                return e = i.sent(), [4, this.depositAmountVm.validationController.validate()];
                            case 2:
                                return t = i.sent(), r = [e, t], [2, !r.find(function(e) {
                                    return !1 === e.valid
                                })]
                        }
                    })
                })
            }, n.prototype.inlineUpdateFormIsValid = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r, i;
                    return __generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, this.cardSelectorVm.validationController.validate()];
                            case 1:
                                return e = o.sent(), [4, this.cardSelectorVm.updateCreditCardVm.validationController.validate()];
                            case 2:
                                return t = o.sent(), [4, this.cardCvvVm.validationController.validate()];
                            case 3:
                                return r = o.sent(), i = [e, t, r], [2, !i.find(function(e) {
                                    return !1 === e.valid
                                })]
                        }
                    })
                })
            }, n.prototype.expiryDateIsValid = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e;
                    return __generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.expiryDateVm.validationController.validate()];
                            case 1:
                                return e = t.sent(), [2, e.valid]
                        }
                    })
                })
            }, n.prototype.resetModel = function() {
                this.removeSecurityCode(), this.updateVisible = !1, this.model.cardSelector.updateVisible = !1, this.model.cardSelector.editFinalised = !0, this.model.cardSelector.updateCreditCard.selectedMonth = null, this.model.cardSelector.updateCreditCard.selectedYear = null, this.model.cardCvv.updateVisible = !1, this.model.expiryDate.selectedMonth = null, this.model.expiryDate.selectedYear = null, this.model.expiryDate.updateExpiryDate = !1, this.model.expiryDate.updateVisible = !1, this.cardSelectorVm.model.updateVisible = !1, this.cardSelectorVm.model.updateCreditCard.selectedMonth = null, this.cardSelectorVm.model.updateCreditCard.selectedYear = null, this.cardSelectorVm.model.updateCreditCard.cvv = null, this.expiryDateVm.model.updateVisible = !1, this.expiryDateVm.model.updateExpiryDate = !1, this.expiryDateVm.model.selectedMonth = null, this.expiryDateVm.model.selectedYear = null, this.expiryDateVm.yearHasBeenTouched = !1, this.expiryDateVm.monthHasBeenTouched = !1, this.cardCvvVm.model.updateVisible = !1, this.hostedSessionState = 0
            }, __decorate([r.bindable({
                defaultBindingMode: r.bindingMode.twoWay
            }), __metadata("design:type", Object)], n.prototype, "model", void 0), __decorate([r.bindable({
                defaultBindingMode: r.bindingMode.twoWay
            }), __metadata("design:type", Object)], n.prototype, "paypalAccount", void 0), __decorate([r.bindable({
                defaultBindingMode: r.bindingMode.twoWay
            }), __metadata("design:type", Boolean)], n.prototype, "spendLimitExceeded", void 0), n = __decorate([r.inject(Element, i.CreditCardDepositService, o.HostedSessionService, s.AureliaConfiguration, d.PaypalService, l.UserContext, u.TattsLog, p.TattsEvent, r.BindingEngine), r.customElement("add-edit-deposit-form"), __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])], n)
        }(n.FormBase);
    t.AddEditDepositForm = b
});
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-templates/add-form/add-form", ["require", "exports", "aurelia-framework", "../../credit-card-deposit-service", "../../hosted-session-service", "../form-base", "../../../../service/credit-card-deposit/credit-card-actions", "aurelia-configuration", "services/paypal/paypal-service", "services/user-context", "services/tatts-log", "services/tatts-event-service"], function(e, t, r, i, o, n, a, s, d, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function(e) {
        function t(t, r, i, o, n, s, d, c, l) {
            var u = e.call(this, t, r, i, o, n, s, d, c, l) || this;
            return u.formType = a.CreditCardActions.Add, u
        }
        return __extends(t, e), t.prototype.bind = function() {
            this.model.cardSelector = {}, this.model.cardNumber = {}, this.model.expiryDate = {}, this.model.cardCvv = {}
        }, t.prototype.loadForm = function() {
            var e = this;
            return this.createNewPaymentSessionAndConfigure().then(function() {
                e.model.cardSelector = Object.assign(e.model.cardSelector, e.getCardSelectorModel()), e.model.cardNumber = Object.assign(e.model.cardNumber, e.getCardNumberModel()), e.model.expiryDate = Object.assign(e.model.expiryDate, e.getExpiryDateModel()), e.model.cardCvv = Object.assign(e.model.cardCvv, e.getCardCvvModel())
            })
        }, t.prototype.onSelectedCardChanged = function(e) {
            this.cardNumberVm.updateCardType(e.detail.value)
        }, t.prototype.formIsValid = function() {
            return Promise.all([this.cardSelectorVm.validationController.validate(), this.cardNumberVm.validationController.validate(), this.expiryDateVm.validate(), this.cardCvvVm.validationController.validate()]).then(function(e) {
                return !e.find(function(e) {
                    return !1 === e.valid
                })
            })
        }, t.prototype.submit = function() {
            var e = this;
            return this.showSubmitButtonSpinner(), this.expiryDateIsValid().then(function(t) {
                return t && e.hostedSessionService.submitPaymentSession()
            })
        }, t.prototype.submitTokenised = function() {
            var e = this;
            this.formIsValid().then(function(t) {
                return t ? e.creditCardDepositService.addCreditCardTokenised(e.masterCardResponse.session.id, e.masterCardResponse.session.version, e.model.recurringPay, e.model.sessionId, e.model.webClientId).then(function(t) {
                    return e.finaliseSubmit(t)
                }).catch(function(t) {
                    return e.showFormResponseError(t)
                }) : e.handleFormInvalid("addTokenised - Please provide a valid result.")
            })
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], t.prototype, "model", void 0), t = __decorate([r.inject(Element, i.CreditCardDepositService, o.HostedSessionService, s.AureliaConfiguration, d.PaypalService, c.UserContext, l.TattsLog, u.TattsEvent, r.BindingEngine), r.customElement("add-form"), __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])], t)
    }(n.FormBase);
    t.AddForm = p
});
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-templates/delete-form/delete-form", ["require", "exports", "aurelia-framework", "../../credit-card-deposit-service", "../../hosted-session-service", "../form-base", "../../../../service/credit-card-deposit/credit-card-actions", "aurelia-configuration", "services/paypal/paypal-service", "services/user-context", "services/tatts-log", "services/tatts-event-service"], function(e, t, r, i, o, n, a, s, d, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function(e) {
        function t(t, r, i, o, n, s, d, c, l) {
            var u = e.call(this, t, r, i, o, n, s, d, c, l) || this;
            return u.formType = a.CreditCardActions.Delete, u
        }
        return __extends(t, e), t.prototype.attached = function() {
            e.prototype.attached.call(this)
        }, t.prototype.submit = function() {
            var e = this;
            if (!this.preventFormChanges) return this.showSubmitButtonSpinner(), this.creditCardDepositService.removeCreditCard(this.model.card.CreditCardId).then(function(t) {
                return e.finaliseSubmit(t)
            }).catch(function(t) {
                return e.showFormResponseError(t)
            })
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], t.prototype, "model", void 0), t = __decorate([r.inject(Element, i.CreditCardDepositService, o.HostedSessionService, s.AureliaConfiguration, d.PaypalService, c.UserContext, l.TattsLog, u.TattsEvent, r.BindingEngine), r.customElement("delete-form"), __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])], t)
    }(n.FormBase);
    t.DeleteForm = p
});
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-templates/deposit-form/deposit-form", ["require", "exports", "aurelia-framework", "../../credit-card-deposit-service", "../../hosted-session-service", "../form-base", "../../../../service/credit-card-deposit/credit-card-actions", "aurelia-configuration", "services/paypal/paypal-service", "services/user-context", "services/tatts-log", "services/tatts-event-service"], function(e, t, r, i, o, n, a, s, d, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function(e) {
        function t(t, r, i, o, n, s, d, c, l) {
            var u = e.call(this, t, r, i, o, n, s, d, c, l) || this;
            return u.formType = a.CreditCardActions.Deposit, u
        }
        return __extends(t, e), t.prototype.bind = function() {
                this.model.depositAmount = {}, this.model.cardCvv = {}
            }, t.prototype.loadForm = function() {
                var e = this;
                return Promise.resolve().then(function() {
                    e.model.depositAmount = Object.assign(e.model.depositAmount, e.getDepositAmountModel(), {
                        populateDepositAmount: !1
                    }), e.model.cardCvv = Object.assign(e.model.cardCvv, e.getCardCvvModel())
                })
            }, t.prototype.formIsValid = function() {
                return Promise.all([Promise.resolve().then(function(e) {
                    return {
                        valid: !0
                    }
                }), this.depositAmountVm.validationController.validate()]).then(function(e) {
                    return !e.find(function(e) {
                        return !1 === e.valid
                    })
                })
            }, t.prototype.submit = function() {
                var e = this;
                return !this.preventFormChanges && (this.showSubmitButtonSpinner(), this.formIsValid().then(function(t) {
                    return t ? e.model.card && e.model.card.CreditCardId ? e.creditCardDepositService.requestCreditCardDepositTokenised(e.model.card.CreditCardId, e.model.card.CardType, e.model.depositAmount.depositAmount, e.model.recurringPay, e.model.sessionId).then(function(t) {
                        return e.finaliseSubmit(t, e.model.depositAmount.depositAmount)
                    }).catch(function(t) {
                        return e.showFormResponseError(t, e.model.depositAmount.depositAmount)
                    }) : void 0 : e.handleFormInvalid("deposit - Please provide a valid result.")
                }))
            }, __decorate([r.bindable({
                defaultBindingMode: r.bindingMode.twoWay
            }), __metadata("design:type", Object)], t.prototype, "model", void 0),
            t = __decorate([r.inject(Element, i.CreditCardDepositService, o.HostedSessionService, s.AureliaConfiguration, d.PaypalService, c.UserContext, l.TattsLog, u.TattsEvent, r.BindingEngine), r.customElement("deposit-form"), __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])], t)
    }(n.FormBase);
    t.DepositForm = p
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-templates/deposit-limit-warning/deposit-limit-warning", ["require", "exports", "aurelia-framework", "aurelia-dialog"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e) {
            this.controller = e, this.controller.settings.centerHorizontalOnly = !0
        }
        return __decorate([r.bindable, __metadata("design:type", Boolean)], e.prototype, "continueAction", void 0), __decorate([r.bindable, __metadata("design:type", Boolean)], e.prototype, "backAction", void 0), __decorate([r.bindable, __metadata("design:type", String)], e.prototype, "spendLimitMessage", void 0), e = __decorate([r.inject(i.DialogController), __metadata("design:paramtypes", [i.DialogController])], e)
    }();
    t.DepositLimitWarning = o
});
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-templates/edit-form/edit-form", ["require", "exports", "aurelia-framework", "../../credit-card-deposit-service", "../../hosted-session-service", "../form-base", "../../../../service/credit-card-deposit/credit-card-actions", "aurelia-configuration", "services/paypal/paypal-service", "services/user-context", "services/tatts-log", "services/tatts-event-service"], function(e, t, r, i, o, n, a, s, d, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function(e) {
        function t(t, r, i, o, n, s, d, c, l) {
            var u = e.call(this, t, r, i, o, n, s, d, c, l) || this;
            return u.formType = a.CreditCardActions.Edit, u.needCardNumber = !1, u
        }
        return __extends(t, e), t.prototype.bind = function() {
            this.model.expiryDate = {
                updateExpiryDate: !0,
                edit: !0
            }, this.model.cardCvv = {
                edit: !0
            }
        }, t.prototype.loadForm = function() {
            var e = this;
            return this.createNewPaymentSessionAndConfigure().then(function() {
                e.model.expiryDate = Object.assign(e.model.expiryDate, e.getExpiryDateModel()), e.model.cardCvv = Object.assign(e.model.cardCvv, e.getCardCvvModel())
            })
        }, t.prototype.formIsValid = function() {
            var e = this;
            return Promise.all([this.expiryDateVm.validate(), Promise.resolve().then(function(t) {
                return e.cardCvvVm.validationController.validate()
            })]).then(function(e) {
                return !e.find(function(e) {
                    return !1 === e.valid
                })
            })
        }, t.prototype.submit = function() {
            var e = this;
            if (!this.preventFormChanges) return this.showSubmitButtonSpinner(), this.expiryDateIsValid().then(function(t) {
                return t && e.hostedSessionService.submitPaymentSession()
            })
        }, t.prototype.submitTokenised = function() {
            var e = this;
            this.formIsValid().then(function(t) {
                return t ? (e.model.card && e.model.card.CreditCardId && (e.model.selectedCard = e.model.card), e.creditCardDepositService.updateCreditCardTokenised(e.model.selectedCard.CreditCardId, e.masterCardResponse.session.id, e.masterCardResponse.session.version, !!e.model.recurringPay, e.model.sessionId, e.model.webClientId).then(function(t) {
                    return e.finaliseSubmit(t)
                }).catch(function(t) {
                    return e.showFormResponseError(t)
                })) : e.handleFormInvalid("editTokenised - Please provide a valid result.")
            })
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", Object)], t.prototype, "model", void 0), t = __decorate([r.inject(Element, i.CreditCardDepositService, o.HostedSessionService, s.AureliaConfiguration, d.PaypalService, c.UserContext, l.TattsLog, u.TattsEvent, r.BindingEngine), r.customElement("edit-form"), __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])], t)
    }(n.FormBase);
    t.EditForm = p
});
var __extends = this && this.__extends || function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(t, r)
        };
        return function(t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(),
    __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        function o(e) {
            return e instanceof r ? e : new r(function(t) {
                t(e)
            })
        }
        return new(r || (r = Promise))(function(r, n) {
            function a(e) {
                try {
                    d(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    d(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function d(e) {
                e.done ? r(e.value) : o(e.value).then(a, s)
            }
            d((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(r) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; d;) try {
                if (o = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, r[1])).done) return a;
                switch (n = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                    case 0:
                    case 1:
                        a = r;
                        break;
                    case 4:
                        return d.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        d.label++, n = r[1], r = [0];
                        continue;
                    case 7:
                        r = d.ops.pop(), d.trys.pop();
                        continue;
                    default:
                        if (a = d.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            d = 0;
                            continue
                        }
                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            d.label = r[1];
                            break
                        }
                        if (6 === r[0] && d.label < a[1]) {
                            d.label = a[1], a = r;
                            break
                        }
                        if (a && d.label < a[2]) {
                            d.label = a[2], d.ops.push(r);
                            break
                        }
                        a[2] && d.ops.pop(), d.trys.pop();
                        continue
                }
                r = t.call(e, d)
            } catch (e) {
                r = [6, e], n = 0
            } finally {
                o = a = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var o, n, a, s, d = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/credit-card-deposit/form-templates/nominate-form/nominate-form", ["require", "exports", "aurelia-framework", "../../credit-card-deposit-service", "../../hosted-session-service", "../form-base", "../../../../service/credit-card-deposit/credit-card-actions", "aurelia-configuration", "services/paypal/paypal-service", "services/paypal/utils", "services/user-context", "services/tatts-log", "services/tatts-event-service", "events/paypal/index", "events/subscriptions/subscription-payment-method-updated-event", "../../credit-card-errors/form-header-errors", "aurelia-dialog"], function(e, t, r, i, o, n, a, s, d, c, l, u, p, m, h, f, g) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var v = {
            None: 0,
            Add: 1,
            Edit: 2
        },
        b = {
            error: 3303,
            message: "Sorry, your request was not successful as there is no record of your PayPal account. Please close this dialog and update your payment method again."
        },
        y = function(t) {
            function n(e, r, i, o, n, s, d, c, l, u) {
                var p = t.call(this, e, r, i, o, n, s, d, c, l) || this;
                return p.controller = u, p.addNewCard = !1, p.formLoading = !0, p.paypalEnabled = !1, p.paypalVaulted = !1, p.hostedSessionState = v.None, p.paypalUnavailable = !1, p.showDialogError = function(e) {
                    p.showFormHeaderError("Uh oh...", e, "error")
                }, p.formType = a.CreditCardActions.Nominate, p.controller = u, p
            }
            return __extends(n, t), n.prototype.bind = function() {
                this.model.cardSelector = {
                    cardDisplayName: "Card"
                }, this.model.cardNumber = {}, this.model.expiryDate = {}, this.model.cardCvv = {}, this.model.title || (this.model.title = "Select payment method")
            }, n.prototype.loadForm = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.populateCards()];
                            case 1:
                                return e.sent(), [4, this.isPaypalEnabled()];
                            case 2:
                                return e.sent(), this.paypalEnabled ? [4, this.retrievePaypal()] : [3, 5];
                            case 3:
                                return e.sent(), [4, this.loadBraintreeScripts()];
                            case 4:
                                e.sent(), e.label = 5;
                            case 5:
                                return this.populateOtherCards(), (this.addNewCard = this.showAddNewCardFields(), this.addNewCard) ? (this.hostedSessionState = v.Add, [4, this.createNewPaymentSessionAndConfigure()]) : [3, 7];
                            case 6:
                                e.sent(), e.label = 7;
                            case 7:
                                return this.model.cardSelector = Object.assign(this.model.cardSelector, this.getCardSelectorModel()), this.model.cardNumber = Object.assign(this.model.cardNumber, this.getCardNumberModel()), this.model.expiryDate = Object.assign(this.model.expiryDate, this.getExpiryDateModel()), this.model.cardCvv = Object.assign(this.model.cardCvv, this.getCardCvvModel()), this.model.cardSelector.autoplayMethod = this.model.autoplayMethod, this.model.cardSelector.nominatedCardNumber = this.model.nominatedCardNumber, this.updateState(), this.hideSubmitButtonSpinner(), [2]
                        }
                    })
                })
            }, n.prototype.formLoaded = function() {
                this.formLoading = !1
            }, n.prototype.populateOtherCards = function() {
                this.cardSelectorVm.model.otherCards = {
                    paypal: {
                        CardType: "PayPal",
                        Email: this.paypalEmail
                    },
                    newVisa: "Visa",
                    newMastercard: "Mastercard"
                }
            }, n.prototype.onFormLoaded = function() {
                t.prototype.onFormLoaded.call(this), this.submitButtonText = this.getSubmitButtonText()
            }, n.prototype.onSelectedCardChanged = function(e) {
                this.hideFormHeaderError(), t.prototype.onSelectedCardChanged.call(this, e), this.updateState(), this.model.cardNumber.selectedCardType = e.detail.value;
                var r = this.cardSelectorVm.model.selectedCard;
                "MasterCard" !== r.CardType && "Visa" !== r.CardType || (this.cardSelectorVm.model.selectedCard.Editing = !1), this.updateVisible && this.toggleCardUpdateSection(), this.addNewCard && this.toggleNewCardSection()
            }, n.prototype.updateState = function() {
                this.addNewCard = this.showAddNewCardFields(), this.updateVisible = !this.addNewCard && this.updateVisible, this.model.cardSelector.showUpdateLink = !this.addNewCard, this.model.cardSelector.updateVisible = this.updateVisible, this.model.expiryDate.updateVisible = this.updateVisible, this.model.expiryDate.updateExpiryDate = this.updateVisible, this.model.cardCvv.updateVisible = this.updateVisible, this.model.cardCvv.hideContinue = this.updateVisible, this.needCardNumber = !this.updateVisible, this.submitButtonText = this.getSubmitButtonText()
            }, n.prototype.showUpdateCardFields = function() {
                return !this.model.cards || this.model.cards.length <= 0 || "Visa" === this.model.cardSelector.selectedCard || "Mastercard" === this.model.cardSelector.selectedCard
            }, n.prototype.toggleCardUpdateSection = function() {
                var e = this;
                if (this.hostedSessionState === v.None && !0 === this.updateVisible) return null;
                this.cardSelectorVm.model.selectedCard.Expired && (this.removeSecurityCode(), this.hostedSessionState = v.None, this.updateVisible = !1), this.updateVisible = !this.updateVisible, this.updateVisible || (this.hostedSessionState = 0, this.removeSecurityCode()), (this.updateVisible && this.hostedSessionState !== v.Edit || this.model.cardSelector.editFinalised) && this.onFormUnloaded(), this.model.expiryDate.updateVisible = this.updateVisible, this.model.expiryDate.updateExpiryDate = this.updateVisible, this.model.cardCvv.updateVisible = this.updateVisible, this.model.cardCvv.hideContinue = this.updateVisible, this.model.cardSelector.updateVisible = this.updateVisible, this.needCardNumber = !this.updateVisible, (this.updateVisible && this.hostedSessionState !== v.Edit || this.model.cardSelector.editFinalised) && this.createNewPaymentSessionAndConfigure().then(function() {
                    e.hostedSessionState = v.Edit, e.onFormLoaded()
                })
            }, n.prototype.toggleNewCardSection = function() {
                var e = this;
                this.hostedSessionState !== v.Add && (this.onFormUnloaded(), this.createNewPaymentSessionAndConfigure().then(function() {
                    e.hostedSessionState = v.Add, e.cardCvvVm.validationController.reset(), e.expiryDateVm.model.selectedMonth = null, e.expiryDateVm.model.selectedYear = null, e.onFormLoaded()
                }))
            }, n.prototype.submit = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r = this;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.formIsValid()];
                            case 1:
                                return e = i.sent(), this.preventFormChanges || !e ? [3, 7] : (this.showSubmitButtonSpinner(), this.addNewCard ? (this.masterCardResponse = null, [4, this.hostedSessionService.submitPaymentSession()]) : [3, 3]);
                            case 2:
                                return i.sent(), [3, 6];
                            case 3:
                                return "PayPal" !== this.model.cardSelector.selectedCard.CardType ? [3, 5] : [4, this.nominatePaypalAccount()];
                            case 4:
                                return i.sent(), [3, 6];
                            case 5:
                                t = this.model.cardSelector.selectedCard.CreditCardId, this.creditCardDepositService.nominateCreditCardTokenised(t).then(function(e) {
                                    e.CreditCardId = t, e.Success ? r.eventService.publishT(new h.SubscriptionPaymentMethodUpdatedEvent(r.model.cardSelector.selectedCard.CardType)) : r.eventService.publishT(new h.SubscriptionPaymentMethodUpdatedFailedEvent(r.model.cardSelector.selectedCard.CardType, e.ErrorInfo.DisplayMessage)), r.finaliseSubmit(e)
                                }).catch(function(e) {
                                    return r.showDialogError(f.ErrorMessageSystemConnection)
                                }), i.label = 6;
                            case 6:
                                this.hideSubmitButtonSpinner(), i.label = 7;
                            case 7:
                                return [2]
                        }
                    })
                })
            }, n.prototype.save = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.expiryDateVm.yearHasBeenTouched = !0, (this.expiryDateVm.monthHasBeenTouched = !0, this.expiryDateVm.model.selectedMonth = this.cardSelectorVm.model.updateCreditCard.selectedMonth, this.expiryDateVm.model.selectedYear = this.cardSelectorVm.model.updateCreditCard.selectedYear, this.cardCvvVm.model.cvv = this.cardSelectorVm.model.updateCreditCard.cvv, this.preventFormChanges || !this.model.cardSelector.selectedCard.CreditCardId) ? [3, 2] : (this.masterCardResponse = null, [4, this.hostedSessionService.submitPaymentSession()]);
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return this.hideSubmitButtonSpinner(), [2]
                        }
                    })
                })
            }, n.prototype.submitTokenised = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        return this.addNewCard ? this.submitAddCard() : this.submitEditCard(), [2]
                    })
                })
            }, n.prototype.submitAddCard = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.addNewCardAndNominateFormIsValid()];
                            case 1:
                                if (!(e = i.sent())) return [3, 5];
                                i.label = 2;
                            case 2:
                                return i.trys.push([2, 4, , 5]), [4, this.creditCardDepositService.addCreditCardTokenised(this.masterCardResponse.session.id, this.masterCardResponse.session.version, !0, this.model.sessionId, this.model.webClientId)];
                            case 3:
                                return t = i.sent(), t.Success ? this.eventService.publishT(new h.SubscriptionPaymentMethodUpdatedEvent(this.model.cardSelector.selectedCard)) : this.eventService.publishT(new h.SubscriptionPaymentMethodUpdatedFailedEvent(this.model.cardSelector.selectedCard, t.ErrorInfo.DisplayMessage)), this.finaliseSubmit(t), [3, 5];
                            case 4:
                                return r = i.sent(), this.log.error("NominateForm - submitAddCard()", "Caught {error}", [r]), this.showDialogError(f.ErrorMessageSystemConnection), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })
            }, n.prototype.submitEditCard = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.inlineUpdateFormIsValid()];
                            case 1:
                                if (!(e = i.sent())) return [3, 6];
                                i.label = 2;
                            case 2:
                                return i.trys.push([2, 4, , 5]), [4, this.creditCardDepositService.updateCreditCardTokenised(this.model.cardSelector.selectedCard.CreditCardId, this.masterCardResponse.session.id, this.masterCardResponse.session.version, this.model.recurringPay, this.model.sessionId, this.model.webClientId)];
                            case 3:
                                return t = i.sent(), (this.cardSelectorVm.updateCreditCardVm.responseReceived = !0, t.Success) ? (this.resetModel(), this.hideFormHeaderError(), [3, 5]) : [2, this.finaliseSubmit(t)];
                            case 4:
                                return r = i.sent(), this.log.error("NominateForm - submitEditCard()", "Caught {error}", [r]), this.showDialogError(f.ErrorMessageSystemConnection), [3, 5];
                            case 5:
                                return [3, 7];
                            case 6:
                                this.cardSelectorVm.updateCreditCardVm.cvvErrors = this.cardCvvVm.cvvErrors, i.label = 7;
                            case 7:
                                return [2]
                        }
                    })
                })
            }, n.prototype.retrievePaypal = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, this.paypalService.getAccount(this.userContext.sessionId)];
                            case 1:
                                return e = r.sent(), this.paypalVaulted = e.Paypal && null !== e.Paypal.PaypalEmail, this.paypalVaulted && (this.paypalEmail = e.Paypal.PaypalEmail), [3, 3];
                            case 2:
                                return t = r.sent(), this.log.error("NominateForm - retrievePaypal()", "Caught {error}", [t]), this.showDialogError(f.ErrorMessageSystemConnection), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, n.prototype.loadBraintreeScripts = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var t = this;
                    return __generator(this, function(r) {
                        return e(["braintreeClient", "paypalCheckout"], function(e, r) {
                            return __awaiter(t, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    return this.client = e, this.checkout = r, [2]
                                })
                            })
                        }, function(e) {
                            t.disablePaypal()
                        }), [2]
                    })
                })
            }, n.prototype.nominatePaypalAccount = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!this.paypalVaulted) return [3, 5];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, this.paypalService.nominateAutoplayPaypal(this.userContext.sessionId)];
                            case 2:
                                return e = i.sent(), e.Success ? (this.userContext.setValue("paypal-connect-status", "true"), this.eventService.publishT(new h.SubscriptionPaymentMethodUpdatedEvent(this.model.cardSelector.selectedCard.CardType)), this.finaliseSubmit(e)) : (this.userContext.setValue("paypal-connect-status", "false"), this.eventService.publishT(new h.SubscriptionPaymentMethodUpdatedFailedEvent(this.model.cardSelector.selectedCard.CardType, e.ErrorInfo.DisplayMessage)), t = e.ErrorInfo.ErrorNo === b.error ? b.message : e.ErrorInfo.DisplayMessage, this.showDialogError(t)), [3, 4];
                            case 3:
                                return r = i.sent(), this.log.error("NominateForm - nominatePaypalAccount()", "Caught {error}", [r]), this.showDialogError(f.ErrorMessageSystemConnection), [3, 4];
                            case 4:
                                return [3, 7];
                            case 5:
                                return [4, this.addAccount()];
                            case 6:
                                i.sent(), i.label = 7;
                            case 7:
                                return [2]
                        }
                    })
                })
            }, n.prototype.addAccount = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, this.paypalService.addAccount(this.userContext.sessionId, this.paypalAccount, !0)];
                            case 1:
                                return e = r.sent(), e.Success ? (this.paypalVaulted = !0, this.userContext.setValue("paypal-connect-status", "true"), this.eventService.publishT(new m.PaypalConnectEvent("SubscriptionBackup")), this.eventService.publishT(new h.SubscriptionPaymentMethodUpdatedEvent(this.model.cardSelector.selectedCard.CardType)), this.finaliseSubmit(e)) : (this.paypalAccount = null, this.userContext.setValue("paypal-connect-status", "false"), this.eventService.publishT(new m.PaypalConnectFailedEvent(e.ErrorInfo.DisplayMessage)), 3302 === e.ErrorInfo.ErrorNo ? this.loadForm() : this.finaliseSubmit(e)), [3, 3];
                            case 2:
                                return t = r.sent(), this.userContext.setValue("paypal-connect-status", "false"), this.eventService.publishT(new m.PaypalConnectFailedEvent("Network Error - addAccount")), this.log.error("NominateForm - addAccount()", "Caught {error}", [t]), this.showDialogError(f.ErrorMessageSystemConnection), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, n.prototype.canUsePaypal = function() {
                return !(!this.userContext || !this.userContext.homeAddress) && ("Australia" === this.userContext.homeAddress.country || "New Zealand" === this.userContext.homeAddress.country)
            }, n.prototype.isPaypalEnabled = function() {
                this.paypalEnabled = c.isPaypalEnabled() && this.canUsePaypal()
            }, n.prototype.paypalAccountChanged = function(e) {
                e && this.submit()
            }, n.prototype.disablePaypal = function() {
                this.paypalUnavailable = !0
            }, n.prototype.getSubmitButtonText = function() {
                return this.model.buttonText || "CONTINUE"
            }, n.prototype.addNewCardAndNominateFormIsValid = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r, i, o;
                    return __generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return this.cardNumberVm.validationController.reset(), [4, this.cardSelectorVm.validationController.validate()];
                            case 1:
                                return e = n.sent(), [4, this.cardNumberVm.validationController.validate()];
                            case 2:
                                return t = n.sent(), [4, this.expiryDateVm.validate()];
                            case 3:
                                return r = n.sent(), [4, this.cardCvvVm.validationController.validate()];
                            case 4:
                                return i = n.sent(), o = [e, t, r, i], [2, !o.find(function(e) {
                                    return !1 === e.valid
                                })]
                        }
                    })
                })
            }, n.prototype.formIsValid = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.cardSelectorVm.validationController.validate()];
                            case 1:
                                return e = r.sent(), t = [e], [2, !t.find(function(e) {
                                    return !1 === e.valid
                                })]
                        }
                    })
                })
            }, n.prototype.inlineUpdateFormIsValid = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e, t, r, i;
                    return __generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, this.cardSelectorVm.validationController.validate()];
                            case 1:
                                return e = o.sent(), [4, this.cardSelectorVm.updateCreditCardVm.validationController.validate()];
                            case 2:
                                return t = o.sent(), [4, this.cardCvvVm.validationController.validate()];
                            case 3:
                                return r = o.sent(), i = [e, t, r], [2, !i.find(function(e) {
                                    return !1 === e.valid
                                })]
                        }
                    })
                })
            }, n.prototype.expiryDateIsValid = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var e;
                    return __generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.expiryDateVm.validationController.validate()];
                            case 1:
                                return e = t.sent(), [2, e.valid]
                        }
                    })
                })
            }, n.prototype.removeSecurityCode = function() {
                var e = document.querySelector(".gw-proxy-securityCode");
                e && e.parentNode.removeChild(e)
            }, n.prototype.resetModel = function() {
                this.removeSecurityCode(), this.updateVisible = !1, this.model.cardSelector.updateVisible = !1, this.model.cardSelector.editFinalised = !0, this.model.cardSelector.updateCreditCard.selectedMonth = null, this.model.cardSelector.updateCreditCard.selectedYear = null, this.model.cardCvv.updateVisible = !1, this.model.expiryDate.selectedMonth = null, this.model.expiryDate.selectedYear = null, this.model.expiryDate.updateExpiryDate = !1, this.model.expiryDate.updateVisible = !1, this.cardSelectorVm.model.updateVisible = !1, this.cardSelectorVm.model.updateCreditCard.selectedMonth = null, this.cardSelectorVm.model.updateCreditCard.selectedYear = null, this.cardSelectorVm.model.updateCreditCard.cvv = null, this.expiryDateVm.model.updateVisible = !1, this.expiryDateVm.model.updateExpiryDate = !1, this.expiryDateVm.model.selectedMonth = null, this.expiryDateVm.model.selectedYear = null, this.expiryDateVm.yearHasBeenTouched = !1, this.expiryDateVm.monthHasBeenTouched = !1, this.cardCvvVm.model.updateVisible = !1, this.hostedSessionState = 0
            }, __decorate([r.bindable({
                defaultBindingMode: r.bindingMode.twoWay
            }), __metadata("design:type", Object)], n.prototype, "model", void 0), __decorate([r.bindable({
                defaultBindingMode: r.bindingMode.twoWay
            }), __metadata("design:type", Object)], n.prototype, "paypalAccount", void 0), n = __decorate([r.inject(Element, i.CreditCardDepositService, o.HostedSessionService, s.AureliaConfiguration, d.PaypalService, l.UserContext, u.TattsLog, p.TattsEvent, r.BindingEngine, g.DialogController), r.customElement("nominate-form"), __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, g.DialogController])], n)
        }(n.FormBase);
    t.NominateForm = y
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-templates/paypal-unknown-error/paypal-unknown-error", ["require", "exports", "aurelia-framework", "aurelia-dialog"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e) {
            this.controller = e
        }
        return __decorate([r.bindable, __metadata("design:type", Object)], e.prototype, "continueAction", void 0), __decorate([r.bindable, __metadata("design:type", String)], e.prototype, "errorMessage", void 0), e = __decorate([r.inject(i.DialogController), __metadata("design:paramtypes", [i.DialogController])], e)
    }();
    t.PaypalUnknownError = o
});
var __decorate = this && this.__decorate || function(e, t, r, i) {
        var o, n = arguments.length,
            a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
        return n > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/credit-card-deposit/form-templates/user-unverified-warning/user-unverified-warning", ["require", "exports", "aurelia-framework", "aurelia-dialog"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e) {
            this.controller = e, this.backHandler = null
        }
        return e.prototype.bind = function() {
            var e = this;
            this.controller.settings.centerHorizontalOnly = !0, this.dialogBack && (this.backHandler = function(t) {
                e.dialogBack(t)
            })
        }, __decorate([r.bindable, __metadata("design:type", Function)], e.prototype, "dialogBack", void 0), e = __decorate([r.inject(i.DialogController), __metadata("design:paramtypes", [i.DialogController])], e)
    }();
    t.UserUnverifiedWarning = o
}), define("text!service/credit-card-deposit/credit-card-deposit.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\ngeneric-error-dialog.credit-card-error {\n  padding: 1rem;\n  top: 3rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  max-height: 100%; }\n  generic-error-dialog.credit-card-error .generic-error-container {\n    position: relative; }\n\nux-dialog-container > div > div {\n  min-width: 320px; }\n\n.credit-card-account-dialog {\n  padding: 16px 0;\n  margin: auto;\n  font-size: 14px;\n  line-height: 20px;\n  max-width: 414px;\n  min-width: 222px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  position: absolute;\n  top: 50% !important;\n  transform: translateY(-50%);\n  max-height: 100%; }\n  .credit-card-account-dialog .contact-number {\n    display: block;\n    color: #000000;\n    font-size: 2.25rem;\n    font-weight: bold;\n    line-height: 2.875rem;\n    margin-top: 1.5rem;\n    margin-bottom: 1rem;\n    height: 46px;\n    text-decoration: none; }\n  .credit-card-account-dialog .ico-phone {\n    background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico-phone.svg");\n    background-position: center;\n    background-repeat: no-repeat;\n    display: inline-block;\n    height: 28px;\n    width: 28px;\n    margin-right: 1rem; }\n  .credit-card-account-dialog input:read-only {\n    background-color: #ffffff; }\n  @media print, screen and (min-width: 40em) {\n    .credit-card-account-dialog {\n      top: 3rem; } }\n  .credit-card-account-dialog ux-dialog {\n    min-width: 0px;\n    width: 100%;\n    border-radius: 0;\n    -webkit-appearance: none;\n    border: 0px;\n    padding: 0px; }\n  .credit-card-account-dialog .dialog-close {\n    color: #ffffff; }\n  .credit-card-account-dialog ux-dialog > ux-dialog-body {\n    padding: 0px; }\n  .credit-card-account-dialog ux-dialog-header {\n    background: linear-gradient(135deg, #4A59A2 0%, #406AAE 18%, #3073B5 31%, #3277B6 43%, #4193BC 56%, #60B9AB 100%);\n    color: #ffffff; }\n    .credit-card-account-dialog ux-dialog-header.dialog-header-notification {\n      background: none;\n      background-color: #F18816;\n      color: #ffffff; }\n    .credit-card-account-dialog ux-dialog-header.dialog-header-error {\n      background: none;\n      background-color: #E74124;\n      color: #ffffff; }\n    .credit-card-account-dialog ux-dialog-header .header-row {\n      position: relative; }\n      .credit-card-account-dialog ux-dialog-header .header-row .dialog-content {\n        min-width: 288px;\n        max-width: 288px; }\n      .credit-card-account-dialog ux-dialog-header .header-row .body-padding-columns {\n        width: 46px; }\n      .credit-card-account-dialog ux-dialog-header .header-row .header-notification {\n        min-width: 238px;\n        margin-left: 10px; }\n        .credit-card-account-dialog ux-dialog-header .header-row .header-notification .header-title {\n          font-size: 14px;\n          line-height: 17px;\n          font-weight: 900; }\n        .credit-card-account-dialog ux-dialog-header .header-row .header-notification .header-message {\n          font-size: 13px;\n          line-height: 15px; }\n      .credit-card-account-dialog ux-dialog-header .header-row .header-icon {\n        width: 40px;\n        height: 40px;\n        background-size: 40px;\n        background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/notification/notificationFaceWarning@2x.png"); }\n        @media only screen and (-webkit-min-device-pixel-ratio: 1.25), only screen and (min--moz-device-pixel-ratio: 1.25), only screen and (-o-min-device-pixel-ratio: 1.25 / 1), only screen and (min-device-pixel-ratio: 1.25), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 1.25dppx) {\n          .credit-card-account-dialog ux-dialog-header .header-row .header-icon {\n            background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/notification/notificationFaceWarning@3x.png"); } }\n      .credit-card-account-dialog ux-dialog-header .header-row .header-error {\n        min-width: 238px; }\n        .credit-card-account-dialog ux-dialog-header .header-row .header-error .header-title {\n          font-size: 24px;\n          line-height: 30px;\n          font-weight: 900;\n          margin: 0.5rem; }\n        .credit-card-account-dialog ux-dialog-header .header-row .header-error .header-message {\n          font-size: 14px;\n          line-height: 20px;\n          margin: 0;\n          font-weight: 900; }\n          .credit-card-account-dialog ux-dialog-header .header-row .header-error .header-message .phone-number {\n            color: #ffffff;\n            text-decoration: underline; }\n          .credit-card-account-dialog ux-dialog-header .header-row .header-error .header-message a {\n            color: #ffffff; }\n        .credit-card-account-dialog ux-dialog-header .header-row .header-error .header-icon {\n          width: 4rem;\n          height: 4rem;\n          background-size: 4rem;\n          margin-bottom: 0.5rem;\n          background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/notification/notificationFaceError.svg"); }\n          .credit-card-account-dialog ux-dialog-header .header-row .header-error .header-icon.error-lock {\n            background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico--account-locked.svg"); }\n      @media screen and (max-width: 352px) {\n        .credit-card-account-dialog ux-dialog-header .header-row .dialog-content {\n          min-width: 0px !important;\n          max-width: 100% !important; }\n        .credit-card-account-dialog ux-dialog-header .header-row .body-padding-columns {\n          display: none; }\n        .credit-card-account-dialog ux-dialog-header .header-row .header-notification {\n          max-width: 100% !important;\n          min-width: 0px !important; } }\n    .credit-card-account-dialog ux-dialog-header .dialog-content {\n      min-width: 288px;\n      max-width: 288px; }\n    @media screen and (max-width: 352px) {\n      .credit-card-account-dialog ux-dialog-header .dialog-content {\n        min-width: 0px !important;\n        max-width: 100% !important; } }\n  .credit-card-account-dialog .dialog-close {\n    display: none; }\n  .credit-card-account-dialog .header-row {\n    position: relative; }\n    .credit-card-account-dialog .header-row .custom-dialog-close {\n      color: #ffffff;\n      position: absolute;\n      font-size: 28px;\n      line-height: 16px;\n      cursor: pointer;\n      right: -5px;\n      top: -5px; }\n    .credit-card-account-dialog .header-row .custom-dialog-close:focus {\n      outline: 0; }\n    .credit-card-account-dialog .header-row .dialog-card-title {\n      padding-top: 9px;\n      padding-bottom: 9px;\n      font-size: 24px;\n      font-weight: 900;\n      line-height: 30px; }\n    .credit-card-account-dialog .header-row .dialog-card-subtitle {\n      font-size: 14px;\n      font-weight: 900;\n      line-height: 20px; }\n  .credit-card-account-dialog .columns {\n    padding-right: 0rem;\n    padding-left: 0rem; }\n  .credit-card-account-dialog .row .row {\n    margin-right: 0rem;\n    margin-left: 0rem; }\n\n.credit-card-base-view {\n  font-size: 14px;\n  line-height: 20px;\n  min-height: 100px; }\n  .credit-card-base-view h4 {\n    color: #000000;\n    margin-top: 1rem;\n    margin-bottom: 1rem; }\n  .credit-card-base-view .loading-container {\n    position: absolute;\n    width: 110%;\n    height: 100%;\n    z-index: 1000;\n    background-color: #ffffff;\n    left: -0.5rem; }\n    .credit-card-base-view .loading-container > .row {\n      height: 100%; }\n  .credit-card-base-view .help-text {\n    margin-top: 0px;\n    margin-bottom: 0px; }\n    .credit-card-base-view .help-text.not-error {\n      padding-left: 0.5rem;\n      color: #444444;\n      background-color: #d8d8d8; }\n  .credit-card-base-view input[type="number"]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0; }\n  .credit-card-base-view input[type=number] {\n    -moz-appearance: textfield; }\n  .credit-card-base-view .columns {\n    padding-right: 0rem;\n    padding-left: 0rem; }\n  .credit-card-base-view .row .row {\n    margin-right: 0rem;\n    margin-left: 0rem; }\n  .credit-card-base-view .dialog-content {\n    position: relative;\n    min-width: 288px;\n    max-width: 288px;\n    margin-top: 1rem;\n    margin-bottom: 1rem; }\n  .credit-card-base-view .body-padding-columns {\n    width: 46px; }\n  @media screen and (max-width: 352px) {\n    .credit-card-base-view .dialog-content {\n      min-width: 0px !important;\n      max-width: 100% !important; }\n    .credit-card-base-view .body-padding-columns {\n      display: none; } }\n  .credit-card-base-view .select-no-option {\n    color: #B2B2B2; }\n  .credit-card-base-view .first-option-disabled option:first-child {\n    color: #B2B2B2;\n    display: none; }\n  .credit-card-base-view select option[disabled] {\n    color: #767676; }\n  .credit-card-base-view select:focus {\n    border: 1px solid #444444 !important; }\n  .credit-card-base-view .credit-card-details-row {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    color: #000000; }\n    .credit-card-base-view .credit-card-details-row .mastercard-icon {\n      height: 33px;\n      width: 47px;\n      border-radius: 3.12px;\n      background-color: #ffffff;\n      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);\n      background-size: 47px;\n      background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/payment/icon--ccmastercard.svg"); }\n    .credit-card-base-view .credit-card-details-row .visa-icon {\n      height: 33px;\n      width: 47px;\n      border-radius: 3.12px;\n      background-color: #ffffff;\n      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);\n      background-size: 47px;\n      background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/payment/icon--ccvisa.svg"); }\n    .credit-card-base-view .credit-card-details-row .separator-column {\n      width: 7px; }\n  .credit-card-base-view .credit-card-text-row {\n    margin-top: 16px;\n    margin-bottom: 4px; }\n    .credit-card-base-view .credit-card-text-row .update-card-link {\n      color: #6C4796;\n      font-size: 12px;\n      line-height: 18px;\n      cursor: pointer;\n      text-decoration: underline;\n      user-select: none; }\n    .credit-card-base-view .credit-card-text-row .link-disabled {\n      pointer-events: none; }\n    .credit-card-base-view .credit-card-text-row .link-not-allowed {\n      cursor: not-allowed; }\n  .credit-card-base-view .credit-card-selection-row .select-card {\n    height: 38px;\n    border-radius: 3px;\n    margin-bottom: 0px;\n    border: 1px solid #C8C8C8;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1); }\n  .credit-card-base-view .card-number-text-row {\n    margin-bottom: 4px;\n    margin-top: 16px; }\n  .credit-card-base-view .card-number-selection-row .card-number-input-row {\n    height: 38px; }\n    .credit-card-base-view .card-number-selection-row .card-number-input-row .input-card-number {\n      margin-bottom: 0px; }\n    .credit-card-base-view .card-number-selection-row .card-number-input-row .input-card-number-tokenised {\n      margin-bottom: 0px;\n      font-family: helvetica, sans-serif;\n      transition: none !important; }\n  .credit-card-base-view .expiry-text-row {\n    margin-bottom: 4px;\n    margin-top: 16px; }\n  .credit-card-base-view .expiry-selection-row .selection-column {\n    max-width: 47%; }\n  .credit-card-base-view .expiry-selection-row .separator-column {\n    max-width: 6%; }\n  .credit-card-base-view .expiry-selection-row .select-month {\n    height: 38px;\n    border-radius: 3px;\n    margin-bottom: 0px;\n    border: 1px solid #C8C8C8;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1); }\n  .credit-card-base-view .expiry-selection-row .select-year {\n    height: 38px;\n    border-radius: 3px;\n    margin-bottom: 0px;\n    border: 1px solid #C8C8C8;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1); }\n  .credit-card-base-view .expiry-selection-row .button-column {\n    max-width: 87px;\n    padding-top: 1px; }\n  .credit-card-base-view button.button.button-action > span.spinner-circular {\n    color: transparent;\n    background: transparent url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico--spinner-white.svg") no-repeat center center/18px 18px;\n    height: 18px;\n    width: 18px;\n    display: block;\n    margin: auto;\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n  .credit-card-base-view .button-save {\n    height: 34px;\n    min-height: 34px;\n    line-height: 34px;\n    width: 87px;\n    border-radius: 100px;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    font-weight: 600; }\n  .credit-card-base-view .button-save:focus {\n    outline: 0; }\n  .credit-card-base-view .cvv-text-row {\n    margin-bottom: 4px;\n    margin-top: 16px; }\n  .credit-card-base-view .cvv-selection-row .cvv-input-row {\n    height: 38px; }\n    .credit-card-base-view .cvv-selection-row .cvv-input-row .input-cvv {\n      width: 72px;\n      margin-bottom: 0px; }\n    .credit-card-base-view .cvv-selection-row .cvv-input-row .input-cvv-tokenised {\n      width: 72px;\n      margin-bottom: 0px;\n      font-family: helvetica, sans-serif;\n      transition: none !important; }\n  .credit-card-base-view .cvv-selection-row .button-save {\n    margin-top: 2px;\n    left: 0;\n    position: relative; }\n    @media print, screen and (min-width: 40em) {\n      .credit-card-base-view .cvv-selection-row .button-save {\n        left: -0.5rem; } }\n  .credit-card-base-view .cvv-selection-row .save-link {\n    align-self: center; }\n  .credit-card-base-view .amount-text-row {\n    margin-bottom: 4px;\n    padding-top: 1rem; }\n  .credit-card-base-view .amount-selection-row .input-amount {\n    padding-left: 25px;\n    margin-bottom: 0px; }\n  .credit-card-base-view .amount-selection-row .currency-symbol {\n    left: 12px;\n    top: 10px;\n    position: relative;\n    width: 0px;\n    color: #B2B2B2; }\n  .credit-card-base-view .delete-text-row {\n    margin-top: 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5rem; }\n  .credit-card-base-view .delete-text-footer {\n    margin: auto;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    display: block; }\n    .credit-card-base-view .delete-text-footer a {\n      text-decoration: none;\n      color: #000000;\n      font-weight: 900; }\n  .credit-card-base-view .action-button-row loading-button .loading-button {\n    margin-top: 0;\n    min-height: auto;\n    width: 100%; }\n  .credit-card-base-view .action-button-row .button-action {\n    width: 100%;\n    font-weight: 900;\n    margin-top: 0; }\n  .credit-card-base-view .action-button-row .button-action:focus {\n    outline: 0; }\n  .credit-card-base-view .action-button-row .button-delete-yes {\n    width: 114px;\n    min-height: 44px;\n    font-size: 16px;\n    font-weight: 900;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-bottom: 0;\n    margin-top: 0; }\n  .credit-card-base-view .action-button-row .button-delete-yes:focus {\n    outline: 0; }\n  .credit-card-base-view .action-button-row .button-delete-cancel {\n    width: 114px;\n    min-height: 44px;\n    font-size: 16px;\n    font-weight: 900;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-bottom: 0;\n    margin-top: 0;\n    color: #6C4796;\n    background-color: #ffffff;\n    border: solid 2px #6C4796; }\n  .credit-card-base-view .action-button-row .button-delete-cancel:focus {\n    outline: 0; }\n  .credit-card-base-view .action-button-row .separator-column {\n    width: 12px; }\n  .credit-card-base-view .delete-button-row {\n    margin-top: 15px; }\n  .credit-card-base-view .note-row {\n    color: #000000;\n    font-size: 0.75rem;\n    line-height: 1.125rem;\n    margin-top: 1.5rem; }\n  .credit-card-base-view .bottom-row {\n    margin-bottom: 1rem; }\n  .credit-card-base-view .bottom-row-padding {\n    margin-bottom: 1rem; }\n  .credit-card-base-view .lets-go-button {\n    margin-top: 1.3rem; }\n  .credit-card-base-view .lets-go-button-tokenised {\n    margin-top: 0; }\n  .credit-card-base-view .min-height {\n    min-height: 6rem; }\n  .credit-card-base-view .cards-loading {\n    position: absolute;\n    width: 100%;\n    z-index: 1000;\n    background-color: #ffffff; }\n  .credit-card-base-view .input-expiry-month-inline {\n    width: 5.15rem; }\n  .credit-card-base-view .input-expiry-year-inline {\n    width: 5.6rem; }\n  .credit-card-base-view .input-cvv-inline {\n    margin-bottom: 0px;\n    font-family: helvetica, sans-serif;\n    transition: none;\n    width: 3.7rem; }\n  .credit-card-base-view .update-credit-card {\n    background: linear-gradient(180deg, #E8E8E8 0%, #FAFAFA 100%);\n    padding: 0.1rem 1rem 1rem 1rem; }\n    .credit-card-base-view .update-credit-card .spinner-circular {\n      background: transparent url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico--spinner.svg") no-repeat center center/18px 18px !important;\n      top: 7px !important; }\n    .credit-card-base-view .update-credit-card .loading-button {\n      max-height: 36px; }\n  .credit-card-base-view .update-card-caret {\n    position: absolute;\n    top: 2.9rem;\n    left: 3.0rem;\n    color: #E8E8E8; }\n  .credit-card-base-view .year-seperator {\n    max-width: 3%; }\n  .credit-card-base-view .cvv-label {\n    padding-right: 2rem; }\n  .credit-card-base-view .save-button {\n    line-height: 32px;\n    padding: 0 35px;\n    min-height: 35px; }\n  .credit-card-base-view .button-section {\n    margin: 1rem 0 0 0; }\n  .credit-card-base-view .full-width {\n    min-width: 100%; }\n'
}), define("text!service/credit-card-deposit/container-templates/account-dialog/account-dialog.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\ndiv.credit-card-account-dialog .dialog-header-row {\n  display: block; }\n\ndiv.credit-card-account-dialog .dialog-card-title.reduce-font-size {\n  font-size: 1.25rem; }\n\ndiv.credit-card-account-dialog .nominate-card-dialog-icon {\n  height: 4rem;\n  width: 4rem;\n  margin-left: auto;\n  margin-right: auto;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% auto; }\n  div.credit-card-account-dialog .nominate-card-dialog-icon.cards {\n    background-image: url("/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets/ico-selectPayment.svg"); }\n  div.credit-card-account-dialog .nominate-card-dialog-icon.piggie-bank {\n    background-image: url("/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets/ico-piggie-bank.svg"); }\n'
}), define("text!service/credit-card-deposit/form-field-templates/paypal-deposit-button/paypal-deposit-button.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.paypal-spinner {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n\n.paypal-notification {\n  padding-bottom: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .paypal-notification-message {\n    margin-right: 0.5rem;\n    padding: 1rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 500;\n    color: #444444;\n    line-height: 1rem;\n    font-size: 0.75rem;\n    text-align: left; }\n    .paypal-notification-message span {\n      margin-left: 0.5rem; }\n  .paypal-notification-icon {\n    min-width: 25px;\n    min-height: 25px; }\n    .paypal-notification-icon--error {\n      background: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico--alert-error.svg") no-repeat center; }\n'
}), define("text!service/credit-card-deposit/form-field-templates/radio-card-selector/radio-card-selector.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\nradio-button label {\n  width: 100%; }\n  radio-button label span {\n    display: flex; }\n\n.card-row {\n  align-items: center;\n  background-color: #ffffff;\n  box-shadow: inset 0 1px 0 0 #E8E8E8;\n  display: flex;\n  height: 40px;\n  width: 288px; }\n\n.card-type {\n  background-color: #ffffff;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border: 1px solid #E8E8E8;\n  border-radius: 3.12px;\n  box-sizing: border-box;\n  height: 22px;\n  margin-left: 0.5rem;\n  margin-top: 1px;\n  width: 32px; }\n  .card-type.icon-visa {\n    background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/payment/icon--ccvisa.svg"); }\n  .card-type.icon-mastercard {\n    background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/payment/icon--ccmastercard.svg"); }\n  .card-type.icon-paypal {\n    background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/paypal/ico--paypal.svg");\n    background-size: 14px 16px; }\n\n.card-description {\n  color: #444444;\n  height: 20px;\n  line-height: 1.6rem;\n  margin-left: 1rem; }\n\n.card-edit {\n  font-size: 12px;\n  line-height: 18px;\n  margin: 0 0.5rem 0 auto;\n  padding-top: 3px; }\n\n.more-options {\n  box-shadow: inset 0 1px 0 0 #E8E8E8;\n  font-size: 12px;\n  line-height: 18px;\n  padding: 0.25rem 1.2rem 0 0;\n  text-align: right; }\n  .more-options .toggle {\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 0.6em;\n    margin: 0.4rem 0 0 0.2rem;\n    position: absolute;\n    width: 0.6em; }\n    .more-options .toggle.off {\n      background-image: url("/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets/caret-down.png"); }\n    .more-options .toggle.on {\n      background-image: url("/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets/caret-up.png"); }\n\n.method-padding {\n  padding-bottom: 0.25rem; }\n\n.cards-loading {\n  position: absolute;\n  width: 100%;\n  z-index: 1000;\n  background-color: #ffffff; }\n\n.paypal-email-truncated {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 9rem; }\n\n.hyperlink-button {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #6C4796; }\n\n.card-saved-indicator .editable-form-saved-indicator {\n  background-image: none !important;\n  background-repeat: unset !important;\n  background-position: unset !important;\n  color: #78B82A;\n  padding-left: 24px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  font-weight: 900;\n  text-transform: uppercase; }\n\n.inline-cvv {\n  max-height: 38px; }\n\n.expired-message {\n  padding-top: 0.75rem; }\n\n.expired-hr {\n  border-bottom: 1px solid white;\n  margin: 0.5rem 0 0 0;\n  width: 100%; }\n\n.purple-spinner {\n  background: transparent url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico--spinner.svg") no-repeat center center/18px 18px !important; }\n'
}), define("text!service/credit-card-deposit/form-templates/add-edit-deposit-form/add-edit-deposit-form.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.add-edit-deposit-form .paypal-account-dialog {\n  padding: 16px 0;\n  margin: auto;\n  font-size: 14px;\n  line-height: 20px;\n  max-width: 414px;\n  min-width: 222px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  position: relative;\n  max-height: 641px; }\n  .add-edit-deposit-form .paypal-account-dialog input:read-only {\n    background-color: #ffffff; }\n\n.add-edit-deposit-form .dialog-paypal-title {\n  padding-top: 9px;\n  padding-bottom: 9px;\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 30px; }\n\n.add-edit-deposit-form .dialog-paypal-subtitle {\n  font-size: 14px;\n  font-weight: 900;\n  line-height: 20px; }\n\n.add-edit-deposit-form .paypal-details-row {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #000000; }\n  .add-edit-deposit-form .paypal-details-row .separator-column {\n    width: 7px; }\n\n.add-edit-deposit-form .paypal-text-row {\n  margin-top: 16px;\n  margin-bottom: 4px; }\n  .add-edit-deposit-form .paypal-text-row .update-paypal-link {\n    color: #6C4796;\n    font-size: 12px;\n    line-height: 18px;\n    cursor: pointer;\n    text-decoration: underline;\n    user-select: none; }\n  .add-edit-deposit-form .paypal-text-row .link-disabled {\n    pointer-events: none; }\n  .add-edit-deposit-form .paypal-text-row .link-not-allowed {\n    cursor: not-allowed; }\n\n.add-edit-deposit-form .paypal-selection-row .select-paypal {\n  height: 38px;\n  border-radius: 3px;\n  margin-bottom: 0px;\n  border: 1px solid #c8c8c8;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1); }\n\n.add-edit-deposit-form .paypal-number-text-row {\n  margin-bottom: 4px;\n  margin-top: 16px; }\n\n.add-edit-deposit-form .paypal-number-selection-row .paypal-number-input-row {\n  height: 38px; }\n  .add-edit-deposit-form .paypal-number-selection-row .paypal-number-input-row .input-paypal-number {\n    margin-bottom: 0px; }\n  .add-edit-deposit-form .paypal-number-selection-row .paypal-number-input-row .input-paypal-number-tokenised {\n    margin-bottom: 0px;\n    font-family: helvetica, sans-serif;\n    transition: none !important; }\n\n.add-edit-deposit-form div.paypal-account-dialog .dialog-header-row {\n  display: block; }\n\n.add-edit-deposit-form div.paypal-account-dialog .dialog-paypal-title.reduce-font-size {\n  font-size: 1.25rem; }\n\n.add-edit-deposit-form .paypal-deposit-button {\n  background-color: #009CDE; }\n  .add-edit-deposit-form .paypal-deposit-button:hover {\n    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2); }\n\n.add-edit-deposit-form .paypal-logo-dialog {\n  width: 100%;\n  height: 32px;\n  background-color: #ffffff;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-image: url("/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets//paypal-logo.svg"); }\n\n.add-edit-deposit-form .paypal-add-deposit-loading {\n  height: 44px;\n  min-height: 44px;\n  max-height: 55px;\n  border-radius: 18px;\n  background: #009CDE;\n  color: #ffffff;\n  width: 100%; }\n\n.add-edit-deposit-form .fake-paypal-button {\n  border-radius: 22px;\n  height: 44px;\n  min-height: 44px;\n  max-height: 44px;\n  width: 100%;\n  background: #009CDE;\n  background-color: #009CDE;\n  color: #ffffff;\n  border: none;\n  margin-top: 0px !important;\n  margin-bottom: 16px !important; }\n\n.add-edit-deposit-form .fake-paypal-button:hover {\n  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);\n  border: none;\n  background-color: #009CDE; }\n\n.add-edit-deposit-form .fake-paypal-button:focus {\n  background-color: #009CDE; }\n\n.add-edit-deposit-form .paypal-button-text {\n  display: inline-block;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  position: relative;\n  top: 9px;\n  transform: matrix(1, 0, 0, 1, 0, -8.5);\n  white-space: pre-wrap;\n  -webkit-font-smoothing: auto; }\n\n.add-edit-deposit-form .paypal-button-logo {\n  vertical-align: top;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  text-align: left;\n  height: 20px;\n  max-height: 26px;\n  min-height: 18px;\n  padding: 0;\n  display: inline-block;\n  background: none;\n  border: none;\n  width: auto;\n  margin-top: 10px; }\n\n.add-edit-deposit-form .hide-paypal-button {\n  visibility: hidden;\n  height: 0; }\n\n.add-edit-deposit-form .insufficient-button-section {\n  margin: 1rem 0 1rem 0; }\n\n.add-edit-deposit-form .script-error-message {\n  margin-right: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  color: #444444;\n  line-height: 1rem;\n  font-size: 0.75rem;\n  text-align: left; }\n  .add-edit-deposit-form .script-error-message span {\n    margin-left: 0.5rem; }\n  .add-edit-deposit-form .script-error-message .icon {\n    min-width: 25px;\n    min-height: 25px; }\n    .add-edit-deposit-form .script-error-message .icon--error {\n      background: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico--alert-error.svg") no-repeat center;\n      align-self: start;\n      margin-top: 0.2rem; }\n\ngeneric-error-dialog.paypal-error {\n  position: relative;\n  padding: 1rem;\n  top: 3rem; }\n  generic-error-dialog.paypal-error .generic-error-container {\n    position: relative; }\n'
}), define("text!service/credit-card-deposit/form-templates/deposit-limit-warning/deposit-limit-warning.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.deposit-limit-warning .deposit-limit-warning-dialog {\n  border-radius: 0;\n  padding: 0;\n  border: 0;\n  width: 100vw;\n  max-width: 382px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  max-height: 100%;\n  -webkit-touch-callout: none !important; }\n  @media (max-width: 768px) {\n    .deposit-limit-warning .deposit-limit-warning-dialog {\n      margin-top: 1rem; } }\n  .deposit-limit-warning .deposit-limit-warning-dialog a {\n    -webkit-user-select: none !important; }\n  @media screen and (max-width: 47.9375em) {\n    .deposit-limit-warning .deposit-limit-warning-dialog {\n      max-width: 343px; } }\n  .deposit-limit-warning .deposit-limit-warning-dialog ux-dialog-header {\n    min-height: 11rem;\n    width: 100%;\n    background: #F18816; }\n    .deposit-limit-warning .deposit-limit-warning-dialog ux-dialog-header .dialog-close {\n      color: white;\n      font-size: 1.7rem; }\n    .deposit-limit-warning .deposit-limit-warning-dialog ux-dialog-header .dialog-header-content {\n      position: relative;\n      height: 100%;\n      background-color: transparent;\n      background-repeat: no-repeat;\n      background-position: top center;\n      background-size: 64px 64px;\n      background-image: url("/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets/ico-hand.svg");\n      padding-top: 110px; }\n      .deposit-limit-warning .deposit-limit-warning-dialog ux-dialog-header .dialog-header-content h2 {\n        font-size: 1.5rem;\n        color: white;\n        text-align: center;\n        top: 80px;\n        position: absolute;\n        width: 100%;\n        font-weight: 900; }\n  .deposit-limit-warning .deposit-limit-warning-dialog ux-dialog-body {\n    padding-top: 0;\n    padding-left: 47px;\n    padding-right: 47px; }\n    @media screen and (max-width: 47.9375em) {\n      .deposit-limit-warning .deposit-limit-warning-dialog ux-dialog-body {\n        padding-left: 27.5px;\n        padding-right: 27.5px; } }\n  .deposit-limit-warning .deposit-limit-warning-dialog ux-dialog-footer {\n    border-top: 0;\n    height: 71px;\n    text-align: center;\n    margin-bottom: 1.125rem;\n    border-top: none;\n    margin-top: 1.125rem;\n    max-width: 22rem; }\n  .deposit-limit-warning .deposit-limit-warning-dialog .separator-column {\n    padding: 0 1rem 1rem 0; }\n  .deposit-limit-warning .deposit-limit-warning-dialog .deposit-limit-buttons {\n    padding-bottom: 2rem; }\n  .deposit-limit-warning .deposit-limit-warning-dialog .dialog-button {\n    font-size: 1rem;\n    font-weight: 900;\n    min-width: 8.5rem;\n    line-height: 1rem;\n    padding-top: 0.8125rem;\n    padding-bottom: 0.8125rem;\n    text-transform: uppercase;\n    position: relative; }\n'
}), define("text!service/credit-card-deposit/form-templates/nominate-form/nominate-form.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\nsection.nominate-form .bodyMessage {\n  color: #444444;\n  font-size: 0.875rem;\n  line-height: 1.25rem; }\n\nsection.nominate-form .cancel-sub-setup-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n  color: #444444;\n  font-size: 0.875rem; }\n  section.nominate-form .cancel-sub-setup-container .cancel-sub-setup {\n    text-decoration: underline;\n    color: #6C4796;\n    cursor: pointer;\n    padding-left: .3rem; }\n\nsection.nominate-form .subscription-message {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem; }\n\nsection.nominate-form .paypal-account-dialog {\n  padding: 16px 0;\n  margin: auto;\n  font-size: 14px;\n  line-height: 20px;\n  max-width: 414px;\n  min-width: 222px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  position: relative;\n  max-height: 641px; }\n  section.nominate-form .paypal-account-dialog input:read-only {\n    background-color: #ffffff; }\n\nsection.nominate-form .dialog-paypal-title {\n  padding-top: 9px;\n  padding-bottom: 9px;\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 30px; }\n\nsection.nominate-form .dialog-paypal-subtitle {\n  font-size: 14px;\n  font-weight: 900;\n  line-height: 20px; }\n\nsection.nominate-form .paypal-details-row {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #000000; }\n  section.nominate-form .paypal-details-row .separator-column {\n    width: 7px; }\n\nsection.nominate-form .paypal-text-row {\n  margin-top: 16px;\n  margin-bottom: 4px; }\n  section.nominate-form .paypal-text-row .update-paypal-link {\n    color: #6C4796;\n    font-size: 12px;\n    line-height: 18px;\n    cursor: pointer;\n    text-decoration: underline;\n    user-select: none; }\n  section.nominate-form .paypal-text-row .link-disabled {\n    pointer-events: none; }\n  section.nominate-form .paypal-text-row .link-not-allowed {\n    cursor: not-allowed; }\n\nsection.nominate-form .paypal-selection-row .select-paypal {\n  height: 38px;\n  border-radius: 3px;\n  margin-bottom: 0px;\n  border: 1px solid #c8c8c8;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1); }\n\nsection.nominate-form .paypal-number-text-row {\n  margin-bottom: 4px;\n  margin-top: 16px; }\n\nsection.nominate-form .paypal-number-selection-row .paypal-number-input-row {\n  height: 38px; }\n  section.nominate-form .paypal-number-selection-row .paypal-number-input-row .input-paypal-number {\n    margin-bottom: 0px; }\n  section.nominate-form .paypal-number-selection-row .paypal-number-input-row .input-paypal-number-tokenised {\n    margin-bottom: 0px;\n    font-family: helvetica, sans-serif;\n    transition: none !important; }\n\nsection.nominate-form div.paypal-account-dialog .dialog-header-row {\n  display: block; }\n\nsection.nominate-form div.paypal-account-dialog .dialog-paypal-title.reduce-font-size {\n  font-size: 1.25rem; }\n\nsection.nominate-form .paypal-deposit-button {\n  background-color: #009CDE; }\n  section.nominate-form .paypal-deposit-button:hover {\n    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2); }\n\nsection.nominate-form .paypal-logo-dialog {\n  width: 100%;\n  height: 32px;\n  background-color: #ffffff;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-image: url("/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets//paypal-logo.svg"); }\n\nsection.nominate-form .paypal-add-deposit-loading {\n  height: 44px;\n  min-height: 44px;\n  max-height: 55px;\n  border-radius: 18px;\n  background: #009CDE;\n  color: #ffffff;\n  width: 100%; }\n\nsection.nominate-form .script-error-message {\n  margin-right: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  color: #444444;\n  line-height: 1rem;\n  font-size: 0.75rem;\n  text-align: left; }\n  section.nominate-form .script-error-message span {\n    margin-left: 0.5rem; }\n  section.nominate-form .script-error-message .icon {\n    min-width: 25px;\n    min-height: 25px; }\n    section.nominate-form .script-error-message .icon--error {\n      background: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/icon/ico--alert-error.svg") no-repeat center;\n      align-self: start;\n      margin-top: 0.2rem; }\n\ngeneric-error-dialog.paypal-error {\n  position: relative;\n  padding: 1rem;\n  top: 3rem; }\n  generic-error-dialog.paypal-error .generic-error-container {\n    position: relative; }\n'
}), define("text!service/credit-card-deposit/form-templates/paypal-unknown-error/paypal-unknown-error.css", ["module"], function(e) {
    e.exports = "/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\npaypal-unknown-error.unknown-error {\n  padding: 1rem;\n  top: 3rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  max-height: 100%; }\n  paypal-unknown-error.unknown-error .generic-error-container {\n    position: relative; }\n\n.paypal-unknown-error .buttons {\n  padding-bottom: 2rem; }\n\n.paypal-unknown-error .dialog-button {\n  font-size: 1rem;\n  font-weight: 900;\n  width: 100%;\n  line-height: 1rem;\n  padding-top: 0.8125rem;\n  padding-bottom: 0.8125rem;\n  text-transform: uppercase;\n  position: relative; }\n"
}), define("text!service/credit-card-deposit/form-templates/user-unverified-warning/user-unverified-warning.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.user-unverified-warning .user-unverified-warning-dialog {\n  border-radius: 0;\n  padding: 0;\n  border: 0;\n  width: 100vw;\n  max-width: 382px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  max-height: 100%;\n  -webkit-touch-callout: none !important; }\n  @media (max-width: 768px) {\n    .user-unverified-warning .user-unverified-warning-dialog {\n      margin-top: 1rem; } }\n  .user-unverified-warning .user-unverified-warning-dialog a {\n    -webkit-user-select: none !important; }\n  @media screen and (max-width: 47.9375em) {\n    .user-unverified-warning .user-unverified-warning-dialog {\n      max-width: 343px; } }\n  .user-unverified-warning .user-unverified-warning-dialog ux-dialog-header {\n    width: 100%;\n    background: #F18816; }\n    .user-unverified-warning .user-unverified-warning-dialog ux-dialog-header .dialog-back {\n      position: absolute;\n      top: -0.5rem;\n      right: -0.375rem;\n      z-index: 1000;\n      margin: 0;\n      color: white;\n      cursor: pointer;\n      font-size: 0.875rem;\n      font-weight: bold;\n      line-height: 1.25rem;\n      text-align: right; }\n    .user-unverified-warning .user-unverified-warning-dialog ux-dialog-header .dialog-header-content {\n      position: relative;\n      height: 100%;\n      background-color: transparent;\n      background-repeat: no-repeat;\n      background-position: top center;\n      background-size: 64px 64px;\n      background-image: url("/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets/ico-hand.svg");\n      padding-top: 110px; }\n      .user-unverified-warning .user-unverified-warning-dialog ux-dialog-header .dialog-header-content h2 {\n        font-size: 1.5rem;\n        color: white;\n        text-align: center;\n        top: 80px;\n        position: absolute;\n        width: 100%;\n        font-weight: 900; }\n  .user-unverified-warning .user-unverified-warning-dialog ux-dialog-body {\n    padding-top: 0;\n    padding-left: 47px;\n    padding-right: 47px; }\n    @media screen and (max-width: 47.9375em) {\n      .user-unverified-warning .user-unverified-warning-dialog ux-dialog-body {\n        padding-left: 27.5px;\n        padding-right: 27.5px; } }\n  .user-unverified-warning .user-unverified-warning-dialog .dialog-button {\n    font-size: 1rem;\n    font-weight: 900;\n    min-width: 18rem;\n    line-height: 1rem;\n    padding-top: 0.8125rem;\n    padding-bottom: 0.8125rem;\n    text-transform: uppercase;\n    position: relative;\n    margin-bottom: 2rem; }\n'
}), define("text!credit-card-service-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/credit-card-service/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2,\n  "tokenisation": {\n    "enabled": false,\n    "mastercardUrl": ""\n  }\n}\n'
});