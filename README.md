# desafio-bsale-back

## Framework y librerías usadas

* Framework [Nestjs](https://nestjs.com/)
* ORM [TypeORM](https://typeorm.io/)

## Deploy

El despliegue del api rest se hizo en un servidor propio (self-host)
> Nota: Los accesos directos al api rest se encuentran en el apartado **Endpoints** 👇

## Estructura de carpetas

```text
src
├── routes
│   ├── category
│   │   ├── category.controller.ts
│   │   ├── category.module.ts
│   │   ├── category.service.ts
│   │   └── category.ts
│   └── product
│       ├── product.controller.ts
│       ├── product.module.ts
│       ├── product.service.ts
│       └── product.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
```

## Endpoints

| Route | Type | Input | Query |
| - | - | - | - |
| [/category/all](https://xoxo.my.to/category/all) | `GET` | void | SELECT * FROM category; |
| [/product/all](https://xoxo.my.to/product/all) | `GET` | void | SELECT * FROM product; |
| [/product/name/:name](https://xoxo.my.to/product/name/ron) | `GET` | name: string | SELECT * FROM product WHERE name LIKE '%name%'; |
| [/product/category/:idCategory](https://xoxo.my.to/product/category/1) | `GET` | idCategory: number | SELECT * FROM product WHERE category = 'idCategory' |
