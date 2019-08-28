export interface Product {
  id: string;
  name: string;
  file: string;
  sku: string;
  supplier: string;
  description: ProductDescription;
  page: ProductPage;
  pricing: ProductPricing;
  inventory: ProductInventory;
  accounts: ProductAccounts;
}

/**
 * Defines various descriptions for a product that can be extended as
 * new types are needed.
 */
export interface ProductDescription {
  short: string;
  long: string;
  /**
   * the top review of the product left by customers.
   */
  review: string;
}

/**
 * The relavent pages and urls for the product that
 * may be expanded as needed.
 */
export interface ProductPage {
  /**
   * if the product does not even have a landing page, there
   * is no need to do any logic with it, so we can define that here.
   */
  enable: boolean;
  url: string;
}

/**
 * Information about the way the product is priced.
 */
export interface ProductPricing {
  /**
   * The total cost per unit of the product.
   */
  cost: number;
  /**
   * The markup applied to the cost.
   */
  markup: number;
  /**
   * The total profit of selling one unit.
   */
  profit: number;
  /**
   * The actual sale price of the product.
   */
  sale: number;
}

/**
 * Information about the product's inventory and storage, as well as
 * backorder information or other errata. 
 */
export interface ProductInventory {
  /**
   * Some products may not need inventory tracked.
   */
  track: boolean;
  /**
   * The current stock on hand of the product.
   */
  current: number;
  /**
   * The total inventory sold in the product's lifetime.
   */
  sold: number;
  /**
   * The total inventory returned in the product's lifetime.
   */
  returned: number;
  /**
   * Determines whether to offer a warning about the product stock, such
   * as when the user hovers over it and gets noticed that stock is low, or
   * just replenished.
   */
  warning: boolean;
}

/**
 * Information on the accounts that track or relate to the product.
 */
export interface ProductAccounts {
  /**
   * The account where income from the product is posted.
   */
  income: any;
    /**
     * The product's cost account
     */
  cost: any;
}