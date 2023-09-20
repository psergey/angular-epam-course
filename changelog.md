# Changelog

## [Module 01]

- Add application skeleton 
- Add product list component
- Add product list Item component
- Add cart component

## [Module 02]

- Add shared module
- Add HighlightDirective to the shared module
- Update project structure, add separate modules for products and carts
- Add cart item component
- Update cart component, change model from product model to cartItem model, render list of cart item component
- Update cart service, add additional methods   


## [Module 03]

- Add core module
- Add ConfigOptionsService
- Add GeneratorService & generatorFactory
- Add genId generator for generating infinit sequence of integer identifiers
- Add LocalStorageService
- Add FontSizeClickChangerDirective to shared module
- Update app component, added new services registration
- Update template for product item component, added FontSizeClickChangerDirective to div element

## [Module 04]

- Add OrderByPipe to core module
- Update product module, add OrderByPipe registration
- Update product item component, add usage of currency standard pipe
- Update product lists component, add order-by pipe
- Update cart module, add OrderByPipe registration
- Update cart item component, add usage of uppercase standard pipe
- Update cart component, add sorting selector, add order-by pipe to cart items

## [Module 05]
- Add admin module
- Add cart module
- Add product module
- Add auth module
- Add auth service in the auth module
- Add auth guard in the auth module
- Update application routings 

## [Module 06]
- Add json database
- Add TimingInterceptor to core module
- Add AppSettingsService service to core module
- Update product service with http client
- Update product resolver