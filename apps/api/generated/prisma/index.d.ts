
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>
/**
 * Model Mining
 * 
 */
export type Mining = $Result.DefaultSelection<Prisma.$MiningPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model UserTask
 * 
 */
export type UserTask = $Result.DefaultSelection<Prisma.$UserTaskPayload>
/**
 * Model Hero
 * 
 */
export type Hero = $Result.DefaultSelection<Prisma.$HeroPayload>
/**
 * Model UserHero
 * 
 */
export type UserHero = $Result.DefaultSelection<Prisma.$UserHeroPayload>
/**
 * Model Battle
 * 
 */
export type Battle = $Result.DefaultSelection<Prisma.$BattlePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model UserProduct
 * 
 */
export type UserProduct = $Result.DefaultSelection<Prisma.$UserProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskType: {
  DEFAULT: 'DEFAULT',
  PARTNER: 'PARTNER'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const TaskStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const BattleStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

export type BattleStatus = (typeof BattleStatus)[keyof typeof BattleStatus]


export const ProductType: {
  HERO: 'HERO',
  ITEM: 'ITEM'
};

export type ProductType = (typeof ProductType)[keyof typeof ProductType]


export const PriceType: {
  TOKEN: 'TOKEN',
  CRYSTAL: 'CRYSTAL'
};

export type PriceType = (typeof PriceType)[keyof typeof PriceType]

}

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type BattleStatus = $Enums.BattleStatus

export const BattleStatus: typeof $Enums.BattleStatus

export type ProductType = $Enums.ProductType

export const ProductType: typeof $Enums.ProductType

export type PriceType = $Enums.PriceType

export const PriceType: typeof $Enums.PriceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mining`: Exposes CRUD operations for the **Mining** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Minings
    * const minings = await prisma.mining.findMany()
    * ```
    */
  get mining(): Prisma.MiningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTask`: Exposes CRUD operations for the **UserTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTasks
    * const userTasks = await prisma.userTask.findMany()
    * ```
    */
  get userTask(): Prisma.UserTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hero`: Exposes CRUD operations for the **Hero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heroes
    * const heroes = await prisma.hero.findMany()
    * ```
    */
  get hero(): Prisma.HeroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userHero`: Exposes CRUD operations for the **UserHero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHeroes
    * const userHeroes = await prisma.userHero.findMany()
    * ```
    */
  get userHero(): Prisma.UserHeroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battle`: Exposes CRUD operations for the **Battle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battles
    * const battles = await prisma.battle.findMany()
    * ```
    */
  get battle(): Prisma.BattleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProduct`: Exposes CRUD operations for the **UserProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProducts
    * const userProducts = await prisma.userProduct.findMany()
    * ```
    */
  get userProduct(): Prisma.UserProductDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    User: 'User',
    Friend: 'Friend',
    Mining: 'Mining',
    Task: 'Task',
    UserTask: 'UserTask',
    Hero: 'Hero',
    UserHero: 'UserHero',
    Battle: 'Battle',
    Product: 'Product',
    UserProduct: 'UserProduct'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "user" | "friend" | "mining" | "task" | "userTask" | "hero" | "userHero" | "battle" | "product" | "userProduct"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
      Mining: {
        payload: Prisma.$MiningPayload<ExtArgs>
        fields: Prisma.MiningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MiningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MiningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>
          }
          findFirst: {
            args: Prisma.MiningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MiningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>
          }
          findMany: {
            args: Prisma.MiningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>[]
          }
          create: {
            args: Prisma.MiningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>
          }
          createMany: {
            args: Prisma.MiningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MiningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>[]
          }
          delete: {
            args: Prisma.MiningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>
          }
          update: {
            args: Prisma.MiningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>
          }
          deleteMany: {
            args: Prisma.MiningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MiningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MiningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>[]
          }
          upsert: {
            args: Prisma.MiningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiningPayload>
          }
          aggregate: {
            args: Prisma.MiningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMining>
          }
          groupBy: {
            args: Prisma.MiningGroupByArgs<ExtArgs>
            result: $Utils.Optional<MiningGroupByOutputType>[]
          }
          count: {
            args: Prisma.MiningCountArgs<ExtArgs>
            result: $Utils.Optional<MiningCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      UserTask: {
        payload: Prisma.$UserTaskPayload<ExtArgs>
        fields: Prisma.UserTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>
          }
          findFirst: {
            args: Prisma.UserTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>
          }
          findMany: {
            args: Prisma.UserTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>[]
          }
          create: {
            args: Prisma.UserTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>
          }
          createMany: {
            args: Prisma.UserTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>[]
          }
          delete: {
            args: Prisma.UserTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>
          }
          update: {
            args: Prisma.UserTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>
          }
          deleteMany: {
            args: Prisma.UserTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>[]
          }
          upsert: {
            args: Prisma.UserTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskPayload>
          }
          aggregate: {
            args: Prisma.UserTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTask>
          }
          groupBy: {
            args: Prisma.UserTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTaskCountArgs<ExtArgs>
            result: $Utils.Optional<UserTaskCountAggregateOutputType> | number
          }
        }
      }
      Hero: {
        payload: Prisma.$HeroPayload<ExtArgs>
        fields: Prisma.HeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findFirst: {
            args: Prisma.HeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findMany: {
            args: Prisma.HeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          create: {
            args: Prisma.HeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          createMany: {
            args: Prisma.HeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          delete: {
            args: Prisma.HeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          update: {
            args: Prisma.HeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          deleteMany: {
            args: Prisma.HeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          upsert: {
            args: Prisma.HeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero>
          }
          groupBy: {
            args: Prisma.HeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroCountArgs<ExtArgs>
            result: $Utils.Optional<HeroCountAggregateOutputType> | number
          }
        }
      }
      UserHero: {
        payload: Prisma.$UserHeroPayload<ExtArgs>
        fields: Prisma.UserHeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>
          }
          findFirst: {
            args: Prisma.UserHeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>
          }
          findMany: {
            args: Prisma.UserHeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>[]
          }
          create: {
            args: Prisma.UserHeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>
          }
          createMany: {
            args: Prisma.UserHeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserHeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>[]
          }
          delete: {
            args: Prisma.UserHeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>
          }
          update: {
            args: Prisma.UserHeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>
          }
          deleteMany: {
            args: Prisma.UserHeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserHeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>[]
          }
          upsert: {
            args: Prisma.UserHeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHeroPayload>
          }
          aggregate: {
            args: Prisma.UserHeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHero>
          }
          groupBy: {
            args: Prisma.UserHeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHeroCountArgs<ExtArgs>
            result: $Utils.Optional<UserHeroCountAggregateOutputType> | number
          }
        }
      }
      Battle: {
        payload: Prisma.$BattlePayload<ExtArgs>
        fields: Prisma.BattleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BattleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BattleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          findFirst: {
            args: Prisma.BattleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BattleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          findMany: {
            args: Prisma.BattleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          create: {
            args: Prisma.BattleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          createMany: {
            args: Prisma.BattleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BattleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          delete: {
            args: Prisma.BattleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          update: {
            args: Prisma.BattleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          deleteMany: {
            args: Prisma.BattleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BattleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BattleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          upsert: {
            args: Prisma.BattleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          aggregate: {
            args: Prisma.BattleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle>
          }
          groupBy: {
            args: Prisma.BattleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BattleCountArgs<ExtArgs>
            result: $Utils.Optional<BattleCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      UserProduct: {
        payload: Prisma.$UserProductPayload<ExtArgs>
        fields: Prisma.UserProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          findFirst: {
            args: Prisma.UserProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          findMany: {
            args: Prisma.UserProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>[]
          }
          create: {
            args: Prisma.UserProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          createMany: {
            args: Prisma.UserProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>[]
          }
          delete: {
            args: Prisma.UserProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          update: {
            args: Prisma.UserProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          deleteMany: {
            args: Prisma.UserProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>[]
          }
          upsert: {
            args: Prisma.UserProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          aggregate: {
            args: Prisma.UserProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProduct>
          }
          groupBy: {
            args: Prisma.UserProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProductCountArgs<ExtArgs>
            result: $Utils.Optional<UserProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    user?: UserOmit
    friend?: FriendOmit
    mining?: MiningOmit
    task?: TaskOmit
    userTask?: UserTaskOmit
    hero?: HeroOmit
    userHero?: UserHeroOmit
    battle?: BattleOmit
    product?: ProductOmit
    userProduct?: UserProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    invitedUsers: number
    minings: number
    userTasks: number
    userHeroes: number
    battlesAsPlayer1: number
    battlesAsPlayer2: number
    wonBattles: number
    userProducts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedUsers?: boolean | UserCountOutputTypeCountInvitedUsersArgs
    minings?: boolean | UserCountOutputTypeCountMiningsArgs
    userTasks?: boolean | UserCountOutputTypeCountUserTasksArgs
    userHeroes?: boolean | UserCountOutputTypeCountUserHeroesArgs
    battlesAsPlayer1?: boolean | UserCountOutputTypeCountBattlesAsPlayer1Args
    battlesAsPlayer2?: boolean | UserCountOutputTypeCountBattlesAsPlayer2Args
    wonBattles?: boolean | UserCountOutputTypeCountWonBattlesArgs
    userProducts?: boolean | UserCountOutputTypeCountUserProductsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMiningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiningWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserHeroesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHeroWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBattlesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBattlesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWonBattlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    userTasks: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTasks?: boolean | TaskCountOutputTypeCountUserTasksArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountUserTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskWhereInput
  }


  /**
   * Count Type HeroCountOutputType
   */

  export type HeroCountOutputType = {
    battlesAsPlayer1: number
    battlesAsPlayer2: number
    userHeroes: number
  }

  export type HeroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battlesAsPlayer1?: boolean | HeroCountOutputTypeCountBattlesAsPlayer1Args
    battlesAsPlayer2?: boolean | HeroCountOutputTypeCountBattlesAsPlayer2Args
    userHeroes?: boolean | HeroCountOutputTypeCountUserHeroesArgs
  }

  // Custom InputTypes
  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroCountOutputType
     */
    select?: HeroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountBattlesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountBattlesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountUserHeroesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHeroWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    userProducts: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProducts?: boolean | ProductCountOutputTypeCountUserProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUserProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    balance: number | null
    crystal: number | null
    streak: number | null
    miningTimeInSeconds: number | null
    miningProfit: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    balance: number | null
    crystal: number | null
    streak: number | null
    miningTimeInSeconds: number | null
    miningProfit: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    photoUrl: string | null
    telegramLanguage: string | null
    telegramId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    lastLoginAt: Date | null
    balance: number | null
    crystal: number | null
    isPremium: boolean | null
    walletAddress: string | null
    streak: number | null
    dailyAvaliable: boolean | null
    miningTimeInSeconds: number | null
    miningProfit: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    photoUrl: string | null
    telegramLanguage: string | null
    telegramId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    lastLoginAt: Date | null
    balance: number | null
    crystal: number | null
    isPremium: boolean | null
    walletAddress: string | null
    streak: number | null
    dailyAvaliable: boolean | null
    miningTimeInSeconds: number | null
    miningProfit: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    photoUrl: number
    telegramLanguage: number
    telegramId: number
    username: number
    firstName: number
    lastName: number
    createdAt: number
    lastLoginAt: number
    balance: number
    crystal: number
    isPremium: number
    walletAddress: number
    streak: number
    dailyAvaliable: number
    miningTimeInSeconds: number
    miningProfit: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    balance?: true
    crystal?: true
    streak?: true
    miningTimeInSeconds?: true
    miningProfit?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    balance?: true
    crystal?: true
    streak?: true
    miningTimeInSeconds?: true
    miningProfit?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    photoUrl?: true
    telegramLanguage?: true
    telegramId?: true
    username?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    lastLoginAt?: true
    balance?: true
    crystal?: true
    isPremium?: true
    walletAddress?: true
    streak?: true
    dailyAvaliable?: true
    miningTimeInSeconds?: true
    miningProfit?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    photoUrl?: true
    telegramLanguage?: true
    telegramId?: true
    username?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    lastLoginAt?: true
    balance?: true
    crystal?: true
    isPremium?: true
    walletAddress?: true
    streak?: true
    dailyAvaliable?: true
    miningTimeInSeconds?: true
    miningProfit?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    photoUrl?: true
    telegramLanguage?: true
    telegramId?: true
    username?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    lastLoginAt?: true
    balance?: true
    crystal?: true
    isPremium?: true
    walletAddress?: true
    streak?: true
    dailyAvaliable?: true
    miningTimeInSeconds?: true
    miningProfit?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    photoUrl: string | null
    telegramLanguage: string
    telegramId: string
    username: string | null
    firstName: string
    lastName: string | null
    createdAt: Date
    lastLoginAt: Date
    balance: number
    crystal: number
    isPremium: boolean
    walletAddress: string | null
    streak: number
    dailyAvaliable: boolean
    miningTimeInSeconds: number
    miningProfit: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    telegramLanguage?: boolean
    telegramId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
    balance?: boolean
    crystal?: boolean
    isPremium?: boolean
    walletAddress?: boolean
    streak?: boolean
    dailyAvaliable?: boolean
    miningTimeInSeconds?: boolean
    miningProfit?: boolean
    invitedUsers?: boolean | User$invitedUsersArgs<ExtArgs>
    friend?: boolean | User$friendArgs<ExtArgs>
    minings?: boolean | User$miningsArgs<ExtArgs>
    userTasks?: boolean | User$userTasksArgs<ExtArgs>
    userHeroes?: boolean | User$userHeroesArgs<ExtArgs>
    battlesAsPlayer1?: boolean | User$battlesAsPlayer1Args<ExtArgs>
    battlesAsPlayer2?: boolean | User$battlesAsPlayer2Args<ExtArgs>
    wonBattles?: boolean | User$wonBattlesArgs<ExtArgs>
    userProducts?: boolean | User$userProductsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    telegramLanguage?: boolean
    telegramId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
    balance?: boolean
    crystal?: boolean
    isPremium?: boolean
    walletAddress?: boolean
    streak?: boolean
    dailyAvaliable?: boolean
    miningTimeInSeconds?: boolean
    miningProfit?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    telegramLanguage?: boolean
    telegramId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
    balance?: boolean
    crystal?: boolean
    isPremium?: boolean
    walletAddress?: boolean
    streak?: boolean
    dailyAvaliable?: boolean
    miningTimeInSeconds?: boolean
    miningProfit?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    photoUrl?: boolean
    telegramLanguage?: boolean
    telegramId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    lastLoginAt?: boolean
    balance?: boolean
    crystal?: boolean
    isPremium?: boolean
    walletAddress?: boolean
    streak?: boolean
    dailyAvaliable?: boolean
    miningTimeInSeconds?: boolean
    miningProfit?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photoUrl" | "telegramLanguage" | "telegramId" | "username" | "firstName" | "lastName" | "createdAt" | "lastLoginAt" | "balance" | "crystal" | "isPremium" | "walletAddress" | "streak" | "dailyAvaliable" | "miningTimeInSeconds" | "miningProfit", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedUsers?: boolean | User$invitedUsersArgs<ExtArgs>
    friend?: boolean | User$friendArgs<ExtArgs>
    minings?: boolean | User$miningsArgs<ExtArgs>
    userTasks?: boolean | User$userTasksArgs<ExtArgs>
    userHeroes?: boolean | User$userHeroesArgs<ExtArgs>
    battlesAsPlayer1?: boolean | User$battlesAsPlayer1Args<ExtArgs>
    battlesAsPlayer2?: boolean | User$battlesAsPlayer2Args<ExtArgs>
    wonBattles?: boolean | User$wonBattlesArgs<ExtArgs>
    userProducts?: boolean | User$userProductsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      invitedUsers: Prisma.$FriendPayload<ExtArgs>[]
      friend: Prisma.$FriendPayload<ExtArgs> | null
      minings: Prisma.$MiningPayload<ExtArgs>[]
      userTasks: Prisma.$UserTaskPayload<ExtArgs>[]
      userHeroes: Prisma.$UserHeroPayload<ExtArgs>[]
      battlesAsPlayer1: Prisma.$BattlePayload<ExtArgs>[]
      battlesAsPlayer2: Prisma.$BattlePayload<ExtArgs>[]
      wonBattles: Prisma.$BattlePayload<ExtArgs>[]
      userProducts: Prisma.$UserProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      photoUrl: string | null
      telegramLanguage: string
      telegramId: string
      username: string | null
      firstName: string
      lastName: string | null
      createdAt: Date
      lastLoginAt: Date
      balance: number
      crystal: number
      isPremium: boolean
      walletAddress: string | null
      streak: number
      dailyAvaliable: boolean
      /**
       * Mining
       */
      miningTimeInSeconds: number
      miningProfit: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitedUsers<T extends User$invitedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$invitedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friend<T extends User$friendArgs<ExtArgs> = {}>(args?: Subset<T, User$friendArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    minings<T extends User$miningsArgs<ExtArgs> = {}>(args?: Subset<T, User$miningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTasks<T extends User$userTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$userTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userHeroes<T extends User$userHeroesArgs<ExtArgs> = {}>(args?: Subset<T, User$userHeroesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesAsPlayer1<T extends User$battlesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, User$battlesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesAsPlayer2<T extends User$battlesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, User$battlesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wonBattles<T extends User$wonBattlesArgs<ExtArgs> = {}>(args?: Subset<T, User$wonBattlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProducts<T extends User$userProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$userProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly telegramLanguage: FieldRef<"User", 'String'>
    readonly telegramId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly balance: FieldRef<"User", 'Int'>
    readonly crystal: FieldRef<"User", 'Int'>
    readonly isPremium: FieldRef<"User", 'Boolean'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly streak: FieldRef<"User", 'Int'>
    readonly dailyAvaliable: FieldRef<"User", 'Boolean'>
    readonly miningTimeInSeconds: FieldRef<"User", 'Int'>
    readonly miningProfit: FieldRef<"User", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.invitedUsers
   */
  export type User$invitedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.friend
   */
  export type User$friendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
  }

  /**
   * User.minings
   */
  export type User$miningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    where?: MiningWhereInput
    orderBy?: MiningOrderByWithRelationInput | MiningOrderByWithRelationInput[]
    cursor?: MiningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiningScalarFieldEnum | MiningScalarFieldEnum[]
  }

  /**
   * User.userTasks
   */
  export type User$userTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    where?: UserTaskWhereInput
    orderBy?: UserTaskOrderByWithRelationInput | UserTaskOrderByWithRelationInput[]
    cursor?: UserTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTaskScalarFieldEnum | UserTaskScalarFieldEnum[]
  }

  /**
   * User.userHeroes
   */
  export type User$userHeroesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    where?: UserHeroWhereInput
    orderBy?: UserHeroOrderByWithRelationInput | UserHeroOrderByWithRelationInput[]
    cursor?: UserHeroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHeroScalarFieldEnum | UserHeroScalarFieldEnum[]
  }

  /**
   * User.battlesAsPlayer1
   */
  export type User$battlesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * User.battlesAsPlayer2
   */
  export type User$battlesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * User.wonBattles
   */
  export type User$wonBattlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * User.userProducts
   */
  export type User$userProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    where?: UserProductWhereInput
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    cursor?: UserProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendAvgAggregateOutputType = {
    id: number | null
    inviterId: number | null
    userId: number | null
    earned: number | null
  }

  export type FriendSumAggregateOutputType = {
    id: number | null
    inviterId: number | null
    userId: number | null
    earned: number | null
  }

  export type FriendMinAggregateOutputType = {
    id: number | null
    inviterId: number | null
    userId: number | null
    earned: number | null
    createdOn: Date | null
  }

  export type FriendMaxAggregateOutputType = {
    id: number | null
    inviterId: number | null
    userId: number | null
    earned: number | null
    createdOn: Date | null
  }

  export type FriendCountAggregateOutputType = {
    id: number
    inviterId: number
    userId: number
    earned: number
    createdOn: number
    _all: number
  }


  export type FriendAvgAggregateInputType = {
    id?: true
    inviterId?: true
    userId?: true
    earned?: true
  }

  export type FriendSumAggregateInputType = {
    id?: true
    inviterId?: true
    userId?: true
    earned?: true
  }

  export type FriendMinAggregateInputType = {
    id?: true
    inviterId?: true
    userId?: true
    earned?: true
    createdOn?: true
  }

  export type FriendMaxAggregateInputType = {
    id?: true
    inviterId?: true
    userId?: true
    earned?: true
    createdOn?: true
  }

  export type FriendCountAggregateInputType = {
    id?: true
    inviterId?: true
    userId?: true
    earned?: true
    createdOn?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _avg?: FriendAvgAggregateInputType
    _sum?: FriendSumAggregateInputType
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    id: number
    inviterId: number
    userId: number
    earned: number
    createdOn: Date
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    userId?: boolean
    earned?: boolean
    createdOn?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    userId?: boolean
    earned?: boolean
    createdOn?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    userId?: boolean
    earned?: boolean
    createdOn?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectScalar = {
    id?: boolean
    inviterId?: boolean
    userId?: boolean
    earned?: boolean
    createdOn?: boolean
  }

  export type FriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inviterId" | "userId" | "earned" | "createdOn", ExtArgs["result"]["friend"]>
  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      inviter: Prisma.$UserPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inviterId: number
      userId: number
      earned: number
      createdOn: Date
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }

  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendWithIdOnly = await prisma.friend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendFindManyArgs>(args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
     */
    create<T extends FriendCreateArgs>(args: SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendCreateManyArgs>(args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
     */
    delete<T extends FriendDeleteArgs>(args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendUpdateArgs>(args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendDeleteManyArgs>(args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendUpdateManyArgs>(args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly id: FieldRef<"Friend", 'Int'>
    readonly inviterId: FieldRef<"Friend", 'Int'>
    readonly userId: FieldRef<"Friend", 'Int'>
    readonly earned: FieldRef<"Friend", 'Float'>
    readonly createdOn: FieldRef<"Friend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friend createManyAndReturn
   */
  export type FriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friend updateManyAndReturn
   */
  export type FriendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
  }


  /**
   * Model Mining
   */

  export type AggregateMining = {
    _count: MiningCountAggregateOutputType | null
    _avg: MiningAvgAggregateOutputType | null
    _sum: MiningSumAggregateOutputType | null
    _min: MiningMinAggregateOutputType | null
    _max: MiningMaxAggregateOutputType | null
  }

  export type MiningAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type MiningSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type MiningMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    startedAt: Date | null
    expiresAt: Date | null
    finishedAt: Date | null
  }

  export type MiningMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    startedAt: Date | null
    expiresAt: Date | null
    finishedAt: Date | null
  }

  export type MiningCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    startedAt: number
    expiresAt: number
    finishedAt: number
    _all: number
  }


  export type MiningAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type MiningSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type MiningMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    startedAt?: true
    expiresAt?: true
    finishedAt?: true
  }

  export type MiningMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    startedAt?: true
    expiresAt?: true
    finishedAt?: true
  }

  export type MiningCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    startedAt?: true
    expiresAt?: true
    finishedAt?: true
    _all?: true
  }

  export type MiningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mining to aggregate.
     */
    where?: MiningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minings to fetch.
     */
    orderBy?: MiningOrderByWithRelationInput | MiningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MiningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Minings
    **/
    _count?: true | MiningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiningMaxAggregateInputType
  }

  export type GetMiningAggregateType<T extends MiningAggregateArgs> = {
        [P in keyof T & keyof AggregateMining]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMining[P]>
      : GetScalarType<T[P], AggregateMining[P]>
  }




  export type MiningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiningWhereInput
    orderBy?: MiningOrderByWithAggregationInput | MiningOrderByWithAggregationInput[]
    by: MiningScalarFieldEnum[] | MiningScalarFieldEnum
    having?: MiningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiningCountAggregateInputType | true
    _avg?: MiningAvgAggregateInputType
    _sum?: MiningSumAggregateInputType
    _min?: MiningMinAggregateInputType
    _max?: MiningMaxAggregateInputType
  }

  export type MiningGroupByOutputType = {
    id: number
    userId: number
    amount: number
    startedAt: Date
    expiresAt: Date
    finishedAt: Date | null
    _count: MiningCountAggregateOutputType | null
    _avg: MiningAvgAggregateOutputType | null
    _sum: MiningSumAggregateOutputType | null
    _min: MiningMinAggregateOutputType | null
    _max: MiningMaxAggregateOutputType | null
  }

  type GetMiningGroupByPayload<T extends MiningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiningGroupByOutputType[P]>
            : GetScalarType<T[P], MiningGroupByOutputType[P]>
        }
      >
    >


  export type MiningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mining"]>

  export type MiningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mining"]>

  export type MiningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mining"]>

  export type MiningSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    finishedAt?: boolean
  }

  export type MiningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "startedAt" | "expiresAt" | "finishedAt", ExtArgs["result"]["mining"]>
  export type MiningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MiningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MiningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MiningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mining"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      startedAt: Date
      expiresAt: Date
      finishedAt: Date | null
    }, ExtArgs["result"]["mining"]>
    composites: {}
  }

  type MiningGetPayload<S extends boolean | null | undefined | MiningDefaultArgs> = $Result.GetResult<Prisma.$MiningPayload, S>

  type MiningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MiningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MiningCountAggregateInputType | true
    }

  export interface MiningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mining'], meta: { name: 'Mining' } }
    /**
     * Find zero or one Mining that matches the filter.
     * @param {MiningFindUniqueArgs} args - Arguments to find a Mining
     * @example
     * // Get one Mining
     * const mining = await prisma.mining.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MiningFindUniqueArgs>(args: SelectSubset<T, MiningFindUniqueArgs<ExtArgs>>): Prisma__MiningClient<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mining that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MiningFindUniqueOrThrowArgs} args - Arguments to find a Mining
     * @example
     * // Get one Mining
     * const mining = await prisma.mining.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MiningFindUniqueOrThrowArgs>(args: SelectSubset<T, MiningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MiningClient<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mining that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiningFindFirstArgs} args - Arguments to find a Mining
     * @example
     * // Get one Mining
     * const mining = await prisma.mining.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MiningFindFirstArgs>(args?: SelectSubset<T, MiningFindFirstArgs<ExtArgs>>): Prisma__MiningClient<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mining that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiningFindFirstOrThrowArgs} args - Arguments to find a Mining
     * @example
     * // Get one Mining
     * const mining = await prisma.mining.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MiningFindFirstOrThrowArgs>(args?: SelectSubset<T, MiningFindFirstOrThrowArgs<ExtArgs>>): Prisma__MiningClient<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Minings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Minings
     * const minings = await prisma.mining.findMany()
     * 
     * // Get first 10 Minings
     * const minings = await prisma.mining.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const miningWithIdOnly = await prisma.mining.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MiningFindManyArgs>(args?: SelectSubset<T, MiningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mining.
     * @param {MiningCreateArgs} args - Arguments to create a Mining.
     * @example
     * // Create one Mining
     * const Mining = await prisma.mining.create({
     *   data: {
     *     // ... data to create a Mining
     *   }
     * })
     * 
     */
    create<T extends MiningCreateArgs>(args: SelectSubset<T, MiningCreateArgs<ExtArgs>>): Prisma__MiningClient<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Minings.
     * @param {MiningCreateManyArgs} args - Arguments to create many Minings.
     * @example
     * // Create many Minings
     * const mining = await prisma.mining.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MiningCreateManyArgs>(args?: SelectSubset<T, MiningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Minings and returns the data saved in the database.
     * @param {MiningCreateManyAndReturnArgs} args - Arguments to create many Minings.
     * @example
     * // Create many Minings
     * const mining = await prisma.mining.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Minings and only return the `id`
     * const miningWithIdOnly = await prisma.mining.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MiningCreateManyAndReturnArgs>(args?: SelectSubset<T, MiningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mining.
     * @param {MiningDeleteArgs} args - Arguments to delete one Mining.
     * @example
     * // Delete one Mining
     * const Mining = await prisma.mining.delete({
     *   where: {
     *     // ... filter to delete one Mining
     *   }
     * })
     * 
     */
    delete<T extends MiningDeleteArgs>(args: SelectSubset<T, MiningDeleteArgs<ExtArgs>>): Prisma__MiningClient<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mining.
     * @param {MiningUpdateArgs} args - Arguments to update one Mining.
     * @example
     * // Update one Mining
     * const mining = await prisma.mining.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MiningUpdateArgs>(args: SelectSubset<T, MiningUpdateArgs<ExtArgs>>): Prisma__MiningClient<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Minings.
     * @param {MiningDeleteManyArgs} args - Arguments to filter Minings to delete.
     * @example
     * // Delete a few Minings
     * const { count } = await prisma.mining.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MiningDeleteManyArgs>(args?: SelectSubset<T, MiningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Minings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Minings
     * const mining = await prisma.mining.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MiningUpdateManyArgs>(args: SelectSubset<T, MiningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Minings and returns the data updated in the database.
     * @param {MiningUpdateManyAndReturnArgs} args - Arguments to update many Minings.
     * @example
     * // Update many Minings
     * const mining = await prisma.mining.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Minings and only return the `id`
     * const miningWithIdOnly = await prisma.mining.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MiningUpdateManyAndReturnArgs>(args: SelectSubset<T, MiningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mining.
     * @param {MiningUpsertArgs} args - Arguments to update or create a Mining.
     * @example
     * // Update or create a Mining
     * const mining = await prisma.mining.upsert({
     *   create: {
     *     // ... data to create a Mining
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mining we want to update
     *   }
     * })
     */
    upsert<T extends MiningUpsertArgs>(args: SelectSubset<T, MiningUpsertArgs<ExtArgs>>): Prisma__MiningClient<$Result.GetResult<Prisma.$MiningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Minings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiningCountArgs} args - Arguments to filter Minings to count.
     * @example
     * // Count the number of Minings
     * const count = await prisma.mining.count({
     *   where: {
     *     // ... the filter for the Minings we want to count
     *   }
     * })
    **/
    count<T extends MiningCountArgs>(
      args?: Subset<T, MiningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MiningAggregateArgs>(args: Subset<T, MiningAggregateArgs>): Prisma.PrismaPromise<GetMiningAggregateType<T>>

    /**
     * Group by Mining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MiningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MiningGroupByArgs['orderBy'] }
        : { orderBy?: MiningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MiningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mining model
   */
  readonly fields: MiningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mining.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MiningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mining model
   */
  interface MiningFieldRefs {
    readonly id: FieldRef<"Mining", 'Int'>
    readonly userId: FieldRef<"Mining", 'Int'>
    readonly amount: FieldRef<"Mining", 'Float'>
    readonly startedAt: FieldRef<"Mining", 'DateTime'>
    readonly expiresAt: FieldRef<"Mining", 'DateTime'>
    readonly finishedAt: FieldRef<"Mining", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mining findUnique
   */
  export type MiningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * Filter, which Mining to fetch.
     */
    where: MiningWhereUniqueInput
  }

  /**
   * Mining findUniqueOrThrow
   */
  export type MiningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * Filter, which Mining to fetch.
     */
    where: MiningWhereUniqueInput
  }

  /**
   * Mining findFirst
   */
  export type MiningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * Filter, which Mining to fetch.
     */
    where?: MiningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minings to fetch.
     */
    orderBy?: MiningOrderByWithRelationInput | MiningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Minings.
     */
    cursor?: MiningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Minings.
     */
    distinct?: MiningScalarFieldEnum | MiningScalarFieldEnum[]
  }

  /**
   * Mining findFirstOrThrow
   */
  export type MiningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * Filter, which Mining to fetch.
     */
    where?: MiningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minings to fetch.
     */
    orderBy?: MiningOrderByWithRelationInput | MiningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Minings.
     */
    cursor?: MiningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Minings.
     */
    distinct?: MiningScalarFieldEnum | MiningScalarFieldEnum[]
  }

  /**
   * Mining findMany
   */
  export type MiningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * Filter, which Minings to fetch.
     */
    where?: MiningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minings to fetch.
     */
    orderBy?: MiningOrderByWithRelationInput | MiningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Minings.
     */
    cursor?: MiningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minings.
     */
    skip?: number
    distinct?: MiningScalarFieldEnum | MiningScalarFieldEnum[]
  }

  /**
   * Mining create
   */
  export type MiningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * The data needed to create a Mining.
     */
    data: XOR<MiningCreateInput, MiningUncheckedCreateInput>
  }

  /**
   * Mining createMany
   */
  export type MiningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Minings.
     */
    data: MiningCreateManyInput | MiningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mining createManyAndReturn
   */
  export type MiningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * The data used to create many Minings.
     */
    data: MiningCreateManyInput | MiningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mining update
   */
  export type MiningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * The data needed to update a Mining.
     */
    data: XOR<MiningUpdateInput, MiningUncheckedUpdateInput>
    /**
     * Choose, which Mining to update.
     */
    where: MiningWhereUniqueInput
  }

  /**
   * Mining updateMany
   */
  export type MiningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Minings.
     */
    data: XOR<MiningUpdateManyMutationInput, MiningUncheckedUpdateManyInput>
    /**
     * Filter which Minings to update
     */
    where?: MiningWhereInput
    /**
     * Limit how many Minings to update.
     */
    limit?: number
  }

  /**
   * Mining updateManyAndReturn
   */
  export type MiningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * The data used to update Minings.
     */
    data: XOR<MiningUpdateManyMutationInput, MiningUncheckedUpdateManyInput>
    /**
     * Filter which Minings to update
     */
    where?: MiningWhereInput
    /**
     * Limit how many Minings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mining upsert
   */
  export type MiningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * The filter to search for the Mining to update in case it exists.
     */
    where: MiningWhereUniqueInput
    /**
     * In case the Mining found by the `where` argument doesn't exist, create a new Mining with this data.
     */
    create: XOR<MiningCreateInput, MiningUncheckedCreateInput>
    /**
     * In case the Mining was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MiningUpdateInput, MiningUncheckedUpdateInput>
  }

  /**
   * Mining delete
   */
  export type MiningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
    /**
     * Filter which Mining to delete.
     */
    where: MiningWhereUniqueInput
  }

  /**
   * Mining deleteMany
   */
  export type MiningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Minings to delete
     */
    where?: MiningWhereInput
    /**
     * Limit how many Minings to delete.
     */
    limit?: number
  }

  /**
   * Mining without action
   */
  export type MiningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mining
     */
    select?: MiningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mining
     */
    omit?: MiningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiningInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    reward: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    reward: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    reward: number | null
    imageUrl: string | null
    link: string | null
    channelId: string | null
    createdOn: Date | null
    type: $Enums.TaskType | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    reward: number | null
    imageUrl: string | null
    link: string | null
    channelId: string | null
    createdOn: Date | null
    type: $Enums.TaskType | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    reward: number
    imageUrl: number
    link: number
    channelId: number
    createdOn: number
    type: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    reward?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    reward?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    reward?: true
    imageUrl?: true
    link?: true
    channelId?: true
    createdOn?: true
    type?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    reward?: true
    imageUrl?: true
    link?: true
    channelId?: true
    createdOn?: true
    type?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    reward?: true
    imageUrl?: true
    link?: true
    channelId?: true
    createdOn?: true
    type?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    reward: number
    imageUrl: string
    link: string | null
    channelId: string | null
    createdOn: Date
    type: $Enums.TaskType
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reward?: boolean
    imageUrl?: boolean
    link?: boolean
    channelId?: boolean
    createdOn?: boolean
    type?: boolean
    userTasks?: boolean | Task$userTasksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reward?: boolean
    imageUrl?: boolean
    link?: boolean
    channelId?: boolean
    createdOn?: boolean
    type?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reward?: boolean
    imageUrl?: boolean
    link?: boolean
    channelId?: boolean
    createdOn?: boolean
    type?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    reward?: boolean
    imageUrl?: boolean
    link?: boolean
    channelId?: boolean
    createdOn?: boolean
    type?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "reward" | "imageUrl" | "link" | "channelId" | "createdOn" | "type", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTasks?: boolean | Task$userTasksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      userTasks: Prisma.$UserTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      reward: number
      imageUrl: string
      link: string | null
      channelId: string | null
      createdOn: Date
      type: $Enums.TaskType
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTasks<T extends Task$userTasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$userTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly reward: FieldRef<"Task", 'Float'>
    readonly imageUrl: FieldRef<"Task", 'String'>
    readonly link: FieldRef<"Task", 'String'>
    readonly channelId: FieldRef<"Task", 'String'>
    readonly createdOn: FieldRef<"Task", 'DateTime'>
    readonly type: FieldRef<"Task", 'TaskType'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.userTasks
   */
  export type Task$userTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    where?: UserTaskWhereInput
    orderBy?: UserTaskOrderByWithRelationInput | UserTaskOrderByWithRelationInput[]
    cursor?: UserTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTaskScalarFieldEnum | UserTaskScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model UserTask
   */

  export type AggregateUserTask = {
    _count: UserTaskCountAggregateOutputType | null
    _avg: UserTaskAvgAggregateOutputType | null
    _sum: UserTaskSumAggregateOutputType | null
    _min: UserTaskMinAggregateOutputType | null
    _max: UserTaskMaxAggregateOutputType | null
  }

  export type UserTaskAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
  }

  export type UserTaskSumAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
  }

  export type UserTaskMinAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
    status: $Enums.TaskStatus | null
    createdAt: Date | null
  }

  export type UserTaskMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
    status: $Enums.TaskStatus | null
    createdAt: Date | null
  }

  export type UserTaskCountAggregateOutputType = {
    id: number
    userId: number
    taskId: number
    status: number
    createdAt: number
    _all: number
  }


  export type UserTaskAvgAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
  }

  export type UserTaskSumAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
  }

  export type UserTaskMinAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    status?: true
    createdAt?: true
  }

  export type UserTaskMaxAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    status?: true
    createdAt?: true
  }

  export type UserTaskCountAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type UserTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTask to aggregate.
     */
    where?: UserTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTasks to fetch.
     */
    orderBy?: UserTaskOrderByWithRelationInput | UserTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTasks
    **/
    _count?: true | UserTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTaskMaxAggregateInputType
  }

  export type GetUserTaskAggregateType<T extends UserTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTask[P]>
      : GetScalarType<T[P], AggregateUserTask[P]>
  }




  export type UserTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskWhereInput
    orderBy?: UserTaskOrderByWithAggregationInput | UserTaskOrderByWithAggregationInput[]
    by: UserTaskScalarFieldEnum[] | UserTaskScalarFieldEnum
    having?: UserTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTaskCountAggregateInputType | true
    _avg?: UserTaskAvgAggregateInputType
    _sum?: UserTaskSumAggregateInputType
    _min?: UserTaskMinAggregateInputType
    _max?: UserTaskMaxAggregateInputType
  }

  export type UserTaskGroupByOutputType = {
    id: number
    userId: number
    taskId: number
    status: $Enums.TaskStatus
    createdAt: Date
    _count: UserTaskCountAggregateOutputType | null
    _avg: UserTaskAvgAggregateOutputType | null
    _sum: UserTaskSumAggregateOutputType | null
    _min: UserTaskMinAggregateOutputType | null
    _max: UserTaskMaxAggregateOutputType | null
  }

  type GetUserTaskGroupByPayload<T extends UserTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTaskGroupByOutputType[P]>
            : GetScalarType<T[P], UserTaskGroupByOutputType[P]>
        }
      >
    >


  export type UserTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTask"]>

  export type UserTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTask"]>

  export type UserTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTask"]>

  export type UserTaskSelectScalar = {
    id?: boolean
    userId?: boolean
    taskId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type UserTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "taskId" | "status" | "createdAt", ExtArgs["result"]["userTask"]>
  export type UserTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTask"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      taskId: number
      status: $Enums.TaskStatus
      createdAt: Date
    }, ExtArgs["result"]["userTask"]>
    composites: {}
  }

  type UserTaskGetPayload<S extends boolean | null | undefined | UserTaskDefaultArgs> = $Result.GetResult<Prisma.$UserTaskPayload, S>

  type UserTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTaskCountAggregateInputType | true
    }

  export interface UserTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTask'], meta: { name: 'UserTask' } }
    /**
     * Find zero or one UserTask that matches the filter.
     * @param {UserTaskFindUniqueArgs} args - Arguments to find a UserTask
     * @example
     * // Get one UserTask
     * const userTask = await prisma.userTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTaskFindUniqueArgs>(args: SelectSubset<T, UserTaskFindUniqueArgs<ExtArgs>>): Prisma__UserTaskClient<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTaskFindUniqueOrThrowArgs} args - Arguments to find a UserTask
     * @example
     * // Get one UserTask
     * const userTask = await prisma.userTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTaskClient<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskFindFirstArgs} args - Arguments to find a UserTask
     * @example
     * // Get one UserTask
     * const userTask = await prisma.userTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTaskFindFirstArgs>(args?: SelectSubset<T, UserTaskFindFirstArgs<ExtArgs>>): Prisma__UserTaskClient<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskFindFirstOrThrowArgs} args - Arguments to find a UserTask
     * @example
     * // Get one UserTask
     * const userTask = await prisma.userTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTaskClient<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTasks
     * const userTasks = await prisma.userTask.findMany()
     * 
     * // Get first 10 UserTasks
     * const userTasks = await prisma.userTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTaskWithIdOnly = await prisma.userTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTaskFindManyArgs>(args?: SelectSubset<T, UserTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTask.
     * @param {UserTaskCreateArgs} args - Arguments to create a UserTask.
     * @example
     * // Create one UserTask
     * const UserTask = await prisma.userTask.create({
     *   data: {
     *     // ... data to create a UserTask
     *   }
     * })
     * 
     */
    create<T extends UserTaskCreateArgs>(args: SelectSubset<T, UserTaskCreateArgs<ExtArgs>>): Prisma__UserTaskClient<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTasks.
     * @param {UserTaskCreateManyArgs} args - Arguments to create many UserTasks.
     * @example
     * // Create many UserTasks
     * const userTask = await prisma.userTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTaskCreateManyArgs>(args?: SelectSubset<T, UserTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTasks and returns the data saved in the database.
     * @param {UserTaskCreateManyAndReturnArgs} args - Arguments to create many UserTasks.
     * @example
     * // Create many UserTasks
     * const userTask = await prisma.userTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTasks and only return the `id`
     * const userTaskWithIdOnly = await prisma.userTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTask.
     * @param {UserTaskDeleteArgs} args - Arguments to delete one UserTask.
     * @example
     * // Delete one UserTask
     * const UserTask = await prisma.userTask.delete({
     *   where: {
     *     // ... filter to delete one UserTask
     *   }
     * })
     * 
     */
    delete<T extends UserTaskDeleteArgs>(args: SelectSubset<T, UserTaskDeleteArgs<ExtArgs>>): Prisma__UserTaskClient<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTask.
     * @param {UserTaskUpdateArgs} args - Arguments to update one UserTask.
     * @example
     * // Update one UserTask
     * const userTask = await prisma.userTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTaskUpdateArgs>(args: SelectSubset<T, UserTaskUpdateArgs<ExtArgs>>): Prisma__UserTaskClient<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTasks.
     * @param {UserTaskDeleteManyArgs} args - Arguments to filter UserTasks to delete.
     * @example
     * // Delete a few UserTasks
     * const { count } = await prisma.userTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTaskDeleteManyArgs>(args?: SelectSubset<T, UserTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTasks
     * const userTask = await prisma.userTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTaskUpdateManyArgs>(args: SelectSubset<T, UserTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTasks and returns the data updated in the database.
     * @param {UserTaskUpdateManyAndReturnArgs} args - Arguments to update many UserTasks.
     * @example
     * // Update many UserTasks
     * const userTask = await prisma.userTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTasks and only return the `id`
     * const userTaskWithIdOnly = await prisma.userTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTask.
     * @param {UserTaskUpsertArgs} args - Arguments to update or create a UserTask.
     * @example
     * // Update or create a UserTask
     * const userTask = await prisma.userTask.upsert({
     *   create: {
     *     // ... data to create a UserTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTask we want to update
     *   }
     * })
     */
    upsert<T extends UserTaskUpsertArgs>(args: SelectSubset<T, UserTaskUpsertArgs<ExtArgs>>): Prisma__UserTaskClient<$Result.GetResult<Prisma.$UserTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskCountArgs} args - Arguments to filter UserTasks to count.
     * @example
     * // Count the number of UserTasks
     * const count = await prisma.userTask.count({
     *   where: {
     *     // ... the filter for the UserTasks we want to count
     *   }
     * })
    **/
    count<T extends UserTaskCountArgs>(
      args?: Subset<T, UserTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTaskAggregateArgs>(args: Subset<T, UserTaskAggregateArgs>): Prisma.PrismaPromise<GetUserTaskAggregateType<T>>

    /**
     * Group by UserTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTaskGroupByArgs['orderBy'] }
        : { orderBy?: UserTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTask model
   */
  readonly fields: UserTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTask model
   */
  interface UserTaskFieldRefs {
    readonly id: FieldRef<"UserTask", 'Int'>
    readonly userId: FieldRef<"UserTask", 'Int'>
    readonly taskId: FieldRef<"UserTask", 'Int'>
    readonly status: FieldRef<"UserTask", 'TaskStatus'>
    readonly createdAt: FieldRef<"UserTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTask findUnique
   */
  export type UserTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserTask to fetch.
     */
    where: UserTaskWhereUniqueInput
  }

  /**
   * UserTask findUniqueOrThrow
   */
  export type UserTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserTask to fetch.
     */
    where: UserTaskWhereUniqueInput
  }

  /**
   * UserTask findFirst
   */
  export type UserTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserTask to fetch.
     */
    where?: UserTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTasks to fetch.
     */
    orderBy?: UserTaskOrderByWithRelationInput | UserTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTasks.
     */
    cursor?: UserTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTasks.
     */
    distinct?: UserTaskScalarFieldEnum | UserTaskScalarFieldEnum[]
  }

  /**
   * UserTask findFirstOrThrow
   */
  export type UserTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserTask to fetch.
     */
    where?: UserTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTasks to fetch.
     */
    orderBy?: UserTaskOrderByWithRelationInput | UserTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTasks.
     */
    cursor?: UserTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTasks.
     */
    distinct?: UserTaskScalarFieldEnum | UserTaskScalarFieldEnum[]
  }

  /**
   * UserTask findMany
   */
  export type UserTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserTasks to fetch.
     */
    where?: UserTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTasks to fetch.
     */
    orderBy?: UserTaskOrderByWithRelationInput | UserTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTasks.
     */
    cursor?: UserTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTasks.
     */
    skip?: number
    distinct?: UserTaskScalarFieldEnum | UserTaskScalarFieldEnum[]
  }

  /**
   * UserTask create
   */
  export type UserTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTask.
     */
    data: XOR<UserTaskCreateInput, UserTaskUncheckedCreateInput>
  }

  /**
   * UserTask createMany
   */
  export type UserTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTasks.
     */
    data: UserTaskCreateManyInput | UserTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTask createManyAndReturn
   */
  export type UserTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * The data used to create many UserTasks.
     */
    data: UserTaskCreateManyInput | UserTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTask update
   */
  export type UserTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTask.
     */
    data: XOR<UserTaskUpdateInput, UserTaskUncheckedUpdateInput>
    /**
     * Choose, which UserTask to update.
     */
    where: UserTaskWhereUniqueInput
  }

  /**
   * UserTask updateMany
   */
  export type UserTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTasks.
     */
    data: XOR<UserTaskUpdateManyMutationInput, UserTaskUncheckedUpdateManyInput>
    /**
     * Filter which UserTasks to update
     */
    where?: UserTaskWhereInput
    /**
     * Limit how many UserTasks to update.
     */
    limit?: number
  }

  /**
   * UserTask updateManyAndReturn
   */
  export type UserTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * The data used to update UserTasks.
     */
    data: XOR<UserTaskUpdateManyMutationInput, UserTaskUncheckedUpdateManyInput>
    /**
     * Filter which UserTasks to update
     */
    where?: UserTaskWhereInput
    /**
     * Limit how many UserTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTask upsert
   */
  export type UserTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTask to update in case it exists.
     */
    where: UserTaskWhereUniqueInput
    /**
     * In case the UserTask found by the `where` argument doesn't exist, create a new UserTask with this data.
     */
    create: XOR<UserTaskCreateInput, UserTaskUncheckedCreateInput>
    /**
     * In case the UserTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTaskUpdateInput, UserTaskUncheckedUpdateInput>
  }

  /**
   * UserTask delete
   */
  export type UserTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
    /**
     * Filter which UserTask to delete.
     */
    where: UserTaskWhereUniqueInput
  }

  /**
   * UserTask deleteMany
   */
  export type UserTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTasks to delete
     */
    where?: UserTaskWhereInput
    /**
     * Limit how many UserTasks to delete.
     */
    limit?: number
  }

  /**
   * UserTask without action
   */
  export type UserTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTask
     */
    select?: UserTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTask
     */
    omit?: UserTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskInclude<ExtArgs> | null
  }


  /**
   * Model Hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  export type HeroAvgAggregateOutputType = {
    id: number | null
    health: number | null
    attack: number | null
  }

  export type HeroSumAggregateOutputType = {
    id: number | null
    health: number | null
    attack: number | null
  }

  export type HeroMinAggregateOutputType = {
    id: number | null
    health: number | null
    attack: number | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type HeroMaxAggregateOutputType = {
    id: number | null
    health: number | null
    attack: number | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type HeroCountAggregateOutputType = {
    id: number
    health: number
    attack: number
    name: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type HeroAvgAggregateInputType = {
    id?: true
    health?: true
    attack?: true
  }

  export type HeroSumAggregateInputType = {
    id?: true
    health?: true
    attack?: true
  }

  export type HeroMinAggregateInputType = {
    id?: true
    health?: true
    attack?: true
    name?: true
    imageUrl?: true
    createdAt?: true
  }

  export type HeroMaxAggregateInputType = {
    id?: true
    health?: true
    attack?: true
    name?: true
    imageUrl?: true
    createdAt?: true
  }

  export type HeroCountAggregateInputType = {
    id?: true
    health?: true
    attack?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type HeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hero to aggregate.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Heroes
    **/
    _count?: true | HeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroMaxAggregateInputType
  }

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
        [P in keyof T & keyof AggregateHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>
  }




  export type HeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroWhereInput
    orderBy?: HeroOrderByWithAggregationInput | HeroOrderByWithAggregationInput[]
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum
    having?: HeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroCountAggregateInputType | true
    _avg?: HeroAvgAggregateInputType
    _sum?: HeroSumAggregateInputType
    _min?: HeroMinAggregateInputType
    _max?: HeroMaxAggregateInputType
  }

  export type HeroGroupByOutputType = {
    id: number
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt: Date
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  type GetHeroGroupByPayload<T extends HeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroGroupByOutputType[P]>
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
        }
      >
    >


  export type HeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    health?: boolean
    attack?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    battlesAsPlayer1?: boolean | Hero$battlesAsPlayer1Args<ExtArgs>
    battlesAsPlayer2?: boolean | Hero$battlesAsPlayer2Args<ExtArgs>
    userHeroes?: boolean | Hero$userHeroesArgs<ExtArgs>
    _count?: boolean | HeroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    health?: boolean
    attack?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    health?: boolean
    attack?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectScalar = {
    id?: boolean
    health?: boolean
    attack?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type HeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "health" | "attack" | "name" | "imageUrl" | "createdAt", ExtArgs["result"]["hero"]>
  export type HeroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battlesAsPlayer1?: boolean | Hero$battlesAsPlayer1Args<ExtArgs>
    battlesAsPlayer2?: boolean | Hero$battlesAsPlayer2Args<ExtArgs>
    userHeroes?: boolean | Hero$userHeroesArgs<ExtArgs>
    _count?: boolean | HeroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HeroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HeroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hero"
    objects: {
      battlesAsPlayer1: Prisma.$BattlePayload<ExtArgs>[]
      battlesAsPlayer2: Prisma.$BattlePayload<ExtArgs>[]
      userHeroes: Prisma.$UserHeroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      health: number
      attack: number
      name: string
      imageUrl: string
      createdAt: Date
    }, ExtArgs["result"]["hero"]>
    composites: {}
  }

  type HeroGetPayload<S extends boolean | null | undefined | HeroDefaultArgs> = $Result.GetResult<Prisma.$HeroPayload, S>

  type HeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroCountAggregateInputType | true
    }

  export interface HeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hero'], meta: { name: 'Hero' } }
    /**
     * Find zero or one Hero that matches the filter.
     * @param {HeroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroFindUniqueArgs>(args: SelectSubset<T, HeroFindUniqueArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroFindFirstArgs>(args?: SelectSubset<T, HeroFindFirstArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     * 
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroWithIdOnly = await prisma.hero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroFindManyArgs>(args?: SelectSubset<T, HeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero.
     * @param {HeroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     * 
     */
    create<T extends HeroCreateArgs>(args: SelectSubset<T, HeroCreateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Heroes.
     * @param {HeroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroCreateManyArgs>(args?: SelectSubset<T, HeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Heroes and returns the data saved in the database.
     * @param {HeroCreateManyAndReturnArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hero.
     * @param {HeroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     * 
     */
    delete<T extends HeroDeleteArgs>(args: SelectSubset<T, HeroDeleteArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero.
     * @param {HeroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroUpdateArgs>(args: SelectSubset<T, HeroUpdateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Heroes.
     * @param {HeroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroDeleteManyArgs>(args?: SelectSubset<T, HeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroUpdateManyArgs>(args: SelectSubset<T, HeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes and returns the data updated in the database.
     * @param {HeroUpdateManyAndReturnArgs} args - Arguments to update many Heroes.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeroUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hero.
     * @param {HeroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends HeroUpsertArgs>(args: SelectSubset<T, HeroUpsertArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
    **/
    count<T extends HeroCountArgs>(
      args?: Subset<T, HeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeroAggregateArgs>(args: Subset<T, HeroAggregateArgs>): Prisma.PrismaPromise<GetHeroAggregateType<T>>

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroGroupByArgs['orderBy'] }
        : { orderBy?: HeroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hero model
   */
  readonly fields: HeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battlesAsPlayer1<T extends Hero$battlesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, Hero$battlesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesAsPlayer2<T extends Hero$battlesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, Hero$battlesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userHeroes<T extends Hero$userHeroesArgs<ExtArgs> = {}>(args?: Subset<T, Hero$userHeroesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hero model
   */
  interface HeroFieldRefs {
    readonly id: FieldRef<"Hero", 'Int'>
    readonly health: FieldRef<"Hero", 'Int'>
    readonly attack: FieldRef<"Hero", 'Int'>
    readonly name: FieldRef<"Hero", 'String'>
    readonly imageUrl: FieldRef<"Hero", 'String'>
    readonly createdAt: FieldRef<"Hero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hero findUnique
   */
  export type HeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findUniqueOrThrow
   */
  export type HeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findFirst
   */
  export type HeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findFirstOrThrow
   */
  export type HeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findMany
   */
  export type HeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Heroes to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero create
   */
  export type HeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The data needed to create a Hero.
     */
    data: XOR<HeroCreateInput, HeroUncheckedCreateInput>
  }

  /**
   * Hero createMany
   */
  export type HeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero createManyAndReturn
   */
  export type HeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero update
   */
  export type HeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The data needed to update a Hero.
     */
    data: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
    /**
     * Choose, which Hero to update.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero updateMany
   */
  export type HeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero updateManyAndReturn
   */
  export type HeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero upsert
   */
  export type HeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The filter to search for the Hero to update in case it exists.
     */
    where: HeroWhereUniqueInput
    /**
     * In case the Hero found by the `where` argument doesn't exist, create a new Hero with this data.
     */
    create: XOR<HeroCreateInput, HeroUncheckedCreateInput>
    /**
     * In case the Hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
  }

  /**
   * Hero delete
   */
  export type HeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter which Hero to delete.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero deleteMany
   */
  export type HeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heroes to delete
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to delete.
     */
    limit?: number
  }

  /**
   * Hero.battlesAsPlayer1
   */
  export type Hero$battlesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Hero.battlesAsPlayer2
   */
  export type Hero$battlesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Hero.userHeroes
   */
  export type Hero$userHeroesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    where?: UserHeroWhereInput
    orderBy?: UserHeroOrderByWithRelationInput | UserHeroOrderByWithRelationInput[]
    cursor?: UserHeroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHeroScalarFieldEnum | UserHeroScalarFieldEnum[]
  }

  /**
   * Hero without action
   */
  export type HeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
  }


  /**
   * Model UserHero
   */

  export type AggregateUserHero = {
    _count: UserHeroCountAggregateOutputType | null
    _avg: UserHeroAvgAggregateOutputType | null
    _sum: UserHeroSumAggregateOutputType | null
    _min: UserHeroMinAggregateOutputType | null
    _max: UserHeroMaxAggregateOutputType | null
  }

  export type UserHeroAvgAggregateOutputType = {
    id: number | null
    heroId: number | null
    userId: number | null
  }

  export type UserHeroSumAggregateOutputType = {
    id: number | null
    heroId: number | null
    userId: number | null
  }

  export type UserHeroMinAggregateOutputType = {
    id: number | null
    heroId: number | null
    userId: number | null
    createdOn: Date | null
  }

  export type UserHeroMaxAggregateOutputType = {
    id: number | null
    heroId: number | null
    userId: number | null
    createdOn: Date | null
  }

  export type UserHeroCountAggregateOutputType = {
    id: number
    heroId: number
    userId: number
    createdOn: number
    _all: number
  }


  export type UserHeroAvgAggregateInputType = {
    id?: true
    heroId?: true
    userId?: true
  }

  export type UserHeroSumAggregateInputType = {
    id?: true
    heroId?: true
    userId?: true
  }

  export type UserHeroMinAggregateInputType = {
    id?: true
    heroId?: true
    userId?: true
    createdOn?: true
  }

  export type UserHeroMaxAggregateInputType = {
    id?: true
    heroId?: true
    userId?: true
    createdOn?: true
  }

  export type UserHeroCountAggregateInputType = {
    id?: true
    heroId?: true
    userId?: true
    createdOn?: true
    _all?: true
  }

  export type UserHeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHero to aggregate.
     */
    where?: UserHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHeroes to fetch.
     */
    orderBy?: UserHeroOrderByWithRelationInput | UserHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHeroes
    **/
    _count?: true | UserHeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserHeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserHeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHeroMaxAggregateInputType
  }

  export type GetUserHeroAggregateType<T extends UserHeroAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHero[P]>
      : GetScalarType<T[P], AggregateUserHero[P]>
  }




  export type UserHeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHeroWhereInput
    orderBy?: UserHeroOrderByWithAggregationInput | UserHeroOrderByWithAggregationInput[]
    by: UserHeroScalarFieldEnum[] | UserHeroScalarFieldEnum
    having?: UserHeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHeroCountAggregateInputType | true
    _avg?: UserHeroAvgAggregateInputType
    _sum?: UserHeroSumAggregateInputType
    _min?: UserHeroMinAggregateInputType
    _max?: UserHeroMaxAggregateInputType
  }

  export type UserHeroGroupByOutputType = {
    id: number
    heroId: number
    userId: number
    createdOn: Date
    _count: UserHeroCountAggregateOutputType | null
    _avg: UserHeroAvgAggregateOutputType | null
    _sum: UserHeroSumAggregateOutputType | null
    _min: UserHeroMinAggregateOutputType | null
    _max: UserHeroMaxAggregateOutputType | null
  }

  type GetUserHeroGroupByPayload<T extends UserHeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHeroGroupByOutputType[P]>
            : GetScalarType<T[P], UserHeroGroupByOutputType[P]>
        }
      >
    >


  export type UserHeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    userId?: boolean
    createdOn?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHero"]>

  export type UserHeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    userId?: boolean
    createdOn?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHero"]>

  export type UserHeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroId?: boolean
    userId?: boolean
    createdOn?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHero"]>

  export type UserHeroSelectScalar = {
    id?: boolean
    heroId?: boolean
    userId?: boolean
    createdOn?: boolean
  }

  export type UserHeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heroId" | "userId" | "createdOn", ExtArgs["result"]["userHero"]>
  export type UserHeroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserHeroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserHeroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserHeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHero"
    objects: {
      hero: Prisma.$HeroPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heroId: number
      userId: number
      createdOn: Date
    }, ExtArgs["result"]["userHero"]>
    composites: {}
  }

  type UserHeroGetPayload<S extends boolean | null | undefined | UserHeroDefaultArgs> = $Result.GetResult<Prisma.$UserHeroPayload, S>

  type UserHeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserHeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserHeroCountAggregateInputType | true
    }

  export interface UserHeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHero'], meta: { name: 'UserHero' } }
    /**
     * Find zero or one UserHero that matches the filter.
     * @param {UserHeroFindUniqueArgs} args - Arguments to find a UserHero
     * @example
     * // Get one UserHero
     * const userHero = await prisma.userHero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHeroFindUniqueArgs>(args: SelectSubset<T, UserHeroFindUniqueArgs<ExtArgs>>): Prisma__UserHeroClient<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserHero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserHeroFindUniqueOrThrowArgs} args - Arguments to find a UserHero
     * @example
     * // Get one UserHero
     * const userHero = await prisma.userHero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHeroFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHeroClient<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeroFindFirstArgs} args - Arguments to find a UserHero
     * @example
     * // Get one UserHero
     * const userHero = await prisma.userHero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHeroFindFirstArgs>(args?: SelectSubset<T, UserHeroFindFirstArgs<ExtArgs>>): Prisma__UserHeroClient<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeroFindFirstOrThrowArgs} args - Arguments to find a UserHero
     * @example
     * // Get one UserHero
     * const userHero = await prisma.userHero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHeroFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHeroClient<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserHeroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHeroes
     * const userHeroes = await prisma.userHero.findMany()
     * 
     * // Get first 10 UserHeroes
     * const userHeroes = await prisma.userHero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHeroWithIdOnly = await prisma.userHero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserHeroFindManyArgs>(args?: SelectSubset<T, UserHeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserHero.
     * @param {UserHeroCreateArgs} args - Arguments to create a UserHero.
     * @example
     * // Create one UserHero
     * const UserHero = await prisma.userHero.create({
     *   data: {
     *     // ... data to create a UserHero
     *   }
     * })
     * 
     */
    create<T extends UserHeroCreateArgs>(args: SelectSubset<T, UserHeroCreateArgs<ExtArgs>>): Prisma__UserHeroClient<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserHeroes.
     * @param {UserHeroCreateManyArgs} args - Arguments to create many UserHeroes.
     * @example
     * // Create many UserHeroes
     * const userHero = await prisma.userHero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHeroCreateManyArgs>(args?: SelectSubset<T, UserHeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserHeroes and returns the data saved in the database.
     * @param {UserHeroCreateManyAndReturnArgs} args - Arguments to create many UserHeroes.
     * @example
     * // Create many UserHeroes
     * const userHero = await prisma.userHero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserHeroes and only return the `id`
     * const userHeroWithIdOnly = await prisma.userHero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserHeroCreateManyAndReturnArgs>(args?: SelectSubset<T, UserHeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserHero.
     * @param {UserHeroDeleteArgs} args - Arguments to delete one UserHero.
     * @example
     * // Delete one UserHero
     * const UserHero = await prisma.userHero.delete({
     *   where: {
     *     // ... filter to delete one UserHero
     *   }
     * })
     * 
     */
    delete<T extends UserHeroDeleteArgs>(args: SelectSubset<T, UserHeroDeleteArgs<ExtArgs>>): Prisma__UserHeroClient<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserHero.
     * @param {UserHeroUpdateArgs} args - Arguments to update one UserHero.
     * @example
     * // Update one UserHero
     * const userHero = await prisma.userHero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHeroUpdateArgs>(args: SelectSubset<T, UserHeroUpdateArgs<ExtArgs>>): Prisma__UserHeroClient<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserHeroes.
     * @param {UserHeroDeleteManyArgs} args - Arguments to filter UserHeroes to delete.
     * @example
     * // Delete a few UserHeroes
     * const { count } = await prisma.userHero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHeroDeleteManyArgs>(args?: SelectSubset<T, UserHeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHeroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHeroes
     * const userHero = await prisma.userHero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHeroUpdateManyArgs>(args: SelectSubset<T, UserHeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHeroes and returns the data updated in the database.
     * @param {UserHeroUpdateManyAndReturnArgs} args - Arguments to update many UserHeroes.
     * @example
     * // Update many UserHeroes
     * const userHero = await prisma.userHero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserHeroes and only return the `id`
     * const userHeroWithIdOnly = await prisma.userHero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserHeroUpdateManyAndReturnArgs>(args: SelectSubset<T, UserHeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserHero.
     * @param {UserHeroUpsertArgs} args - Arguments to update or create a UserHero.
     * @example
     * // Update or create a UserHero
     * const userHero = await prisma.userHero.upsert({
     *   create: {
     *     // ... data to create a UserHero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHero we want to update
     *   }
     * })
     */
    upsert<T extends UserHeroUpsertArgs>(args: SelectSubset<T, UserHeroUpsertArgs<ExtArgs>>): Prisma__UserHeroClient<$Result.GetResult<Prisma.$UserHeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserHeroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeroCountArgs} args - Arguments to filter UserHeroes to count.
     * @example
     * // Count the number of UserHeroes
     * const count = await prisma.userHero.count({
     *   where: {
     *     // ... the filter for the UserHeroes we want to count
     *   }
     * })
    **/
    count<T extends UserHeroCountArgs>(
      args?: Subset<T, UserHeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserHeroAggregateArgs>(args: Subset<T, UserHeroAggregateArgs>): Prisma.PrismaPromise<GetUserHeroAggregateType<T>>

    /**
     * Group by UserHero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHeroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserHeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHeroGroupByArgs['orderBy'] }
        : { orderBy?: UserHeroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserHeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHero model
   */
  readonly fields: UserHeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends HeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeroDefaultArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserHero model
   */
  interface UserHeroFieldRefs {
    readonly id: FieldRef<"UserHero", 'Int'>
    readonly heroId: FieldRef<"UserHero", 'Int'>
    readonly userId: FieldRef<"UserHero", 'Int'>
    readonly createdOn: FieldRef<"UserHero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserHero findUnique
   */
  export type UserHeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * Filter, which UserHero to fetch.
     */
    where: UserHeroWhereUniqueInput
  }

  /**
   * UserHero findUniqueOrThrow
   */
  export type UserHeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * Filter, which UserHero to fetch.
     */
    where: UserHeroWhereUniqueInput
  }

  /**
   * UserHero findFirst
   */
  export type UserHeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * Filter, which UserHero to fetch.
     */
    where?: UserHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHeroes to fetch.
     */
    orderBy?: UserHeroOrderByWithRelationInput | UserHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHeroes.
     */
    cursor?: UserHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHeroes.
     */
    distinct?: UserHeroScalarFieldEnum | UserHeroScalarFieldEnum[]
  }

  /**
   * UserHero findFirstOrThrow
   */
  export type UserHeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * Filter, which UserHero to fetch.
     */
    where?: UserHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHeroes to fetch.
     */
    orderBy?: UserHeroOrderByWithRelationInput | UserHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHeroes.
     */
    cursor?: UserHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHeroes.
     */
    distinct?: UserHeroScalarFieldEnum | UserHeroScalarFieldEnum[]
  }

  /**
   * UserHero findMany
   */
  export type UserHeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * Filter, which UserHeroes to fetch.
     */
    where?: UserHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHeroes to fetch.
     */
    orderBy?: UserHeroOrderByWithRelationInput | UserHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHeroes.
     */
    cursor?: UserHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHeroes.
     */
    skip?: number
    distinct?: UserHeroScalarFieldEnum | UserHeroScalarFieldEnum[]
  }

  /**
   * UserHero create
   */
  export type UserHeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHero.
     */
    data: XOR<UserHeroCreateInput, UserHeroUncheckedCreateInput>
  }

  /**
   * UserHero createMany
   */
  export type UserHeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHeroes.
     */
    data: UserHeroCreateManyInput | UserHeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHero createManyAndReturn
   */
  export type UserHeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * The data used to create many UserHeroes.
     */
    data: UserHeroCreateManyInput | UserHeroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHero update
   */
  export type UserHeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHero.
     */
    data: XOR<UserHeroUpdateInput, UserHeroUncheckedUpdateInput>
    /**
     * Choose, which UserHero to update.
     */
    where: UserHeroWhereUniqueInput
  }

  /**
   * UserHero updateMany
   */
  export type UserHeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHeroes.
     */
    data: XOR<UserHeroUpdateManyMutationInput, UserHeroUncheckedUpdateManyInput>
    /**
     * Filter which UserHeroes to update
     */
    where?: UserHeroWhereInput
    /**
     * Limit how many UserHeroes to update.
     */
    limit?: number
  }

  /**
   * UserHero updateManyAndReturn
   */
  export type UserHeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * The data used to update UserHeroes.
     */
    data: XOR<UserHeroUpdateManyMutationInput, UserHeroUncheckedUpdateManyInput>
    /**
     * Filter which UserHeroes to update
     */
    where?: UserHeroWhereInput
    /**
     * Limit how many UserHeroes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHero upsert
   */
  export type UserHeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHero to update in case it exists.
     */
    where: UserHeroWhereUniqueInput
    /**
     * In case the UserHero found by the `where` argument doesn't exist, create a new UserHero with this data.
     */
    create: XOR<UserHeroCreateInput, UserHeroUncheckedCreateInput>
    /**
     * In case the UserHero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHeroUpdateInput, UserHeroUncheckedUpdateInput>
  }

  /**
   * UserHero delete
   */
  export type UserHeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
    /**
     * Filter which UserHero to delete.
     */
    where: UserHeroWhereUniqueInput
  }

  /**
   * UserHero deleteMany
   */
  export type UserHeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHeroes to delete
     */
    where?: UserHeroWhereInput
    /**
     * Limit how many UserHeroes to delete.
     */
    limit?: number
  }

  /**
   * UserHero without action
   */
  export type UserHeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHero
     */
    select?: UserHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHero
     */
    omit?: UserHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHeroInclude<ExtArgs> | null
  }


  /**
   * Model Battle
   */

  export type AggregateBattle = {
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  export type BattleAvgAggregateOutputType = {
    id: number | null
    winnerId: number | null
    player1Id: number | null
    player2Id: number | null
    player1HeroId: number | null
    player2HeroId: number | null
    player1Health: number | null
    player2Health: number | null
    player1Attack: number | null
    player2Attack: number | null
  }

  export type BattleSumAggregateOutputType = {
    id: number | null
    winnerId: number | null
    player1Id: number | null
    player2Id: number | null
    player1HeroId: number | null
    player2HeroId: number | null
    player1Health: number | null
    player2Health: number | null
    player1Attack: number | null
    player2Attack: number | null
  }

  export type BattleMinAggregateOutputType = {
    id: number | null
    winnerId: number | null
    player1Id: number | null
    player2Id: number | null
    player1HeroId: number | null
    player2HeroId: number | null
    player1Health: number | null
    player2Health: number | null
    player1Attack: number | null
    player2Attack: number | null
    status: $Enums.BattleStatus | null
    createdOn: Date | null
  }

  export type BattleMaxAggregateOutputType = {
    id: number | null
    winnerId: number | null
    player1Id: number | null
    player2Id: number | null
    player1HeroId: number | null
    player2HeroId: number | null
    player1Health: number | null
    player2Health: number | null
    player1Attack: number | null
    player2Attack: number | null
    status: $Enums.BattleStatus | null
    createdOn: Date | null
  }

  export type BattleCountAggregateOutputType = {
    id: number
    winnerId: number
    player1Id: number
    player2Id: number
    player1HeroId: number
    player2HeroId: number
    player1Health: number
    player2Health: number
    player1Attack: number
    player2Attack: number
    status: number
    createdOn: number
    _all: number
  }


  export type BattleAvgAggregateInputType = {
    id?: true
    winnerId?: true
    player1Id?: true
    player2Id?: true
    player1HeroId?: true
    player2HeroId?: true
    player1Health?: true
    player2Health?: true
    player1Attack?: true
    player2Attack?: true
  }

  export type BattleSumAggregateInputType = {
    id?: true
    winnerId?: true
    player1Id?: true
    player2Id?: true
    player1HeroId?: true
    player2HeroId?: true
    player1Health?: true
    player2Health?: true
    player1Attack?: true
    player2Attack?: true
  }

  export type BattleMinAggregateInputType = {
    id?: true
    winnerId?: true
    player1Id?: true
    player2Id?: true
    player1HeroId?: true
    player2HeroId?: true
    player1Health?: true
    player2Health?: true
    player1Attack?: true
    player2Attack?: true
    status?: true
    createdOn?: true
  }

  export type BattleMaxAggregateInputType = {
    id?: true
    winnerId?: true
    player1Id?: true
    player2Id?: true
    player1HeroId?: true
    player2HeroId?: true
    player1Health?: true
    player2Health?: true
    player1Attack?: true
    player2Attack?: true
    status?: true
    createdOn?: true
  }

  export type BattleCountAggregateInputType = {
    id?: true
    winnerId?: true
    player1Id?: true
    player2Id?: true
    player1HeroId?: true
    player2HeroId?: true
    player1Health?: true
    player2Health?: true
    player1Attack?: true
    player2Attack?: true
    status?: true
    createdOn?: true
    _all?: true
  }

  export type BattleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Battle to aggregate.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Battles
    **/
    _count?: true | BattleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleMaxAggregateInputType
  }

  export type GetBattleAggregateType<T extends BattleAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle[P]>
      : GetScalarType<T[P], AggregateBattle[P]>
  }




  export type BattleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithAggregationInput | BattleOrderByWithAggregationInput[]
    by: BattleScalarFieldEnum[] | BattleScalarFieldEnum
    having?: BattleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleCountAggregateInputType | true
    _avg?: BattleAvgAggregateInputType
    _sum?: BattleSumAggregateInputType
    _min?: BattleMinAggregateInputType
    _max?: BattleMaxAggregateInputType
  }

  export type BattleGroupByOutputType = {
    id: number
    winnerId: number | null
    player1Id: number | null
    player2Id: number | null
    player1HeroId: number | null
    player2HeroId: number | null
    player1Health: number | null
    player2Health: number | null
    player1Attack: number | null
    player2Attack: number | null
    status: $Enums.BattleStatus
    createdOn: Date
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  type GetBattleGroupByPayload<T extends BattleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleGroupByOutputType[P]>
            : GetScalarType<T[P], BattleGroupByOutputType[P]>
        }
      >
    >


  export type BattleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    winnerId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1HeroId?: boolean
    player2HeroId?: boolean
    player1Health?: boolean
    player2Health?: boolean
    player1Attack?: boolean
    player2Attack?: boolean
    status?: boolean
    createdOn?: boolean
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1?: boolean | Battle$player1Args<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    player1Hero?: boolean | Battle$player1HeroArgs<ExtArgs>
    player2Hero?: boolean | Battle$player2HeroArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    winnerId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1HeroId?: boolean
    player2HeroId?: boolean
    player1Health?: boolean
    player2Health?: boolean
    player1Attack?: boolean
    player2Attack?: boolean
    status?: boolean
    createdOn?: boolean
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1?: boolean | Battle$player1Args<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    player1Hero?: boolean | Battle$player1HeroArgs<ExtArgs>
    player2Hero?: boolean | Battle$player2HeroArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    winnerId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1HeroId?: boolean
    player2HeroId?: boolean
    player1Health?: boolean
    player2Health?: boolean
    player1Attack?: boolean
    player2Attack?: boolean
    status?: boolean
    createdOn?: boolean
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1?: boolean | Battle$player1Args<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    player1Hero?: boolean | Battle$player1HeroArgs<ExtArgs>
    player2Hero?: boolean | Battle$player2HeroArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectScalar = {
    id?: boolean
    winnerId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1HeroId?: boolean
    player2HeroId?: boolean
    player1Health?: boolean
    player2Health?: boolean
    player1Attack?: boolean
    player2Attack?: boolean
    status?: boolean
    createdOn?: boolean
  }

  export type BattleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "winnerId" | "player1Id" | "player2Id" | "player1HeroId" | "player2HeroId" | "player1Health" | "player2Health" | "player1Attack" | "player2Attack" | "status" | "createdOn", ExtArgs["result"]["battle"]>
  export type BattleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1?: boolean | Battle$player1Args<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    player1Hero?: boolean | Battle$player1HeroArgs<ExtArgs>
    player2Hero?: boolean | Battle$player2HeroArgs<ExtArgs>
  }
  export type BattleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1?: boolean | Battle$player1Args<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    player1Hero?: boolean | Battle$player1HeroArgs<ExtArgs>
    player2Hero?: boolean | Battle$player2HeroArgs<ExtArgs>
  }
  export type BattleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1?: boolean | Battle$player1Args<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    player1Hero?: boolean | Battle$player1HeroArgs<ExtArgs>
    player2Hero?: boolean | Battle$player2HeroArgs<ExtArgs>
  }

  export type $BattlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Battle"
    objects: {
      winner: Prisma.$UserPayload<ExtArgs> | null
      player1: Prisma.$UserPayload<ExtArgs> | null
      player2: Prisma.$UserPayload<ExtArgs> | null
      player1Hero: Prisma.$HeroPayload<ExtArgs> | null
      player2Hero: Prisma.$HeroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      winnerId: number | null
      player1Id: number | null
      player2Id: number | null
      player1HeroId: number | null
      player2HeroId: number | null
      player1Health: number | null
      player2Health: number | null
      player1Attack: number | null
      player2Attack: number | null
      status: $Enums.BattleStatus
      createdOn: Date
    }, ExtArgs["result"]["battle"]>
    composites: {}
  }

  type BattleGetPayload<S extends boolean | null | undefined | BattleDefaultArgs> = $Result.GetResult<Prisma.$BattlePayload, S>

  type BattleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BattleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattleCountAggregateInputType | true
    }

  export interface BattleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Battle'], meta: { name: 'Battle' } }
    /**
     * Find zero or one Battle that matches the filter.
     * @param {BattleFindUniqueArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BattleFindUniqueArgs>(args: SelectSubset<T, BattleFindUniqueArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BattleFindUniqueOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BattleFindUniqueOrThrowArgs>(args: SelectSubset<T, BattleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindFirstArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BattleFindFirstArgs>(args?: SelectSubset<T, BattleFindFirstArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindFirstOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BattleFindFirstOrThrowArgs>(args?: SelectSubset<T, BattleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battles
     * const battles = await prisma.battle.findMany()
     * 
     * // Get first 10 Battles
     * const battles = await prisma.battle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleWithIdOnly = await prisma.battle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BattleFindManyArgs>(args?: SelectSubset<T, BattleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battle.
     * @param {BattleCreateArgs} args - Arguments to create a Battle.
     * @example
     * // Create one Battle
     * const Battle = await prisma.battle.create({
     *   data: {
     *     // ... data to create a Battle
     *   }
     * })
     * 
     */
    create<T extends BattleCreateArgs>(args: SelectSubset<T, BattleCreateArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battles.
     * @param {BattleCreateManyArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BattleCreateManyArgs>(args?: SelectSubset<T, BattleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Battles and returns the data saved in the database.
     * @param {BattleCreateManyAndReturnArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Battles and only return the `id`
     * const battleWithIdOnly = await prisma.battle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BattleCreateManyAndReturnArgs>(args?: SelectSubset<T, BattleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Battle.
     * @param {BattleDeleteArgs} args - Arguments to delete one Battle.
     * @example
     * // Delete one Battle
     * const Battle = await prisma.battle.delete({
     *   where: {
     *     // ... filter to delete one Battle
     *   }
     * })
     * 
     */
    delete<T extends BattleDeleteArgs>(args: SelectSubset<T, BattleDeleteArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battle.
     * @param {BattleUpdateArgs} args - Arguments to update one Battle.
     * @example
     * // Update one Battle
     * const battle = await prisma.battle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BattleUpdateArgs>(args: SelectSubset<T, BattleUpdateArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battles.
     * @param {BattleDeleteManyArgs} args - Arguments to filter Battles to delete.
     * @example
     * // Delete a few Battles
     * const { count } = await prisma.battle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BattleDeleteManyArgs>(args?: SelectSubset<T, BattleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battles
     * const battle = await prisma.battle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BattleUpdateManyArgs>(args: SelectSubset<T, BattleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles and returns the data updated in the database.
     * @param {BattleUpdateManyAndReturnArgs} args - Arguments to update many Battles.
     * @example
     * // Update many Battles
     * const battle = await prisma.battle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Battles and only return the `id`
     * const battleWithIdOnly = await prisma.battle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BattleUpdateManyAndReturnArgs>(args: SelectSubset<T, BattleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Battle.
     * @param {BattleUpsertArgs} args - Arguments to update or create a Battle.
     * @example
     * // Update or create a Battle
     * const battle = await prisma.battle.upsert({
     *   create: {
     *     // ... data to create a Battle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle we want to update
     *   }
     * })
     */
    upsert<T extends BattleUpsertArgs>(args: SelectSubset<T, BattleUpsertArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleCountArgs} args - Arguments to filter Battles to count.
     * @example
     * // Count the number of Battles
     * const count = await prisma.battle.count({
     *   where: {
     *     // ... the filter for the Battles we want to count
     *   }
     * })
    **/
    count<T extends BattleCountArgs>(
      args?: Subset<T, BattleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BattleAggregateArgs>(args: Subset<T, BattleAggregateArgs>): Prisma.PrismaPromise<GetBattleAggregateType<T>>

    /**
     * Group by Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BattleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BattleGroupByArgs['orderBy'] }
        : { orderBy?: BattleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BattleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Battle model
   */
  readonly fields: BattleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Battle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BattleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    winner<T extends Battle$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Battle$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player1<T extends Battle$player1Args<ExtArgs> = {}>(args?: Subset<T, Battle$player1Args<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player2<T extends Battle$player2Args<ExtArgs> = {}>(args?: Subset<T, Battle$player2Args<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player1Hero<T extends Battle$player1HeroArgs<ExtArgs> = {}>(args?: Subset<T, Battle$player1HeroArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player2Hero<T extends Battle$player2HeroArgs<ExtArgs> = {}>(args?: Subset<T, Battle$player2HeroArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Battle model
   */
  interface BattleFieldRefs {
    readonly id: FieldRef<"Battle", 'Int'>
    readonly winnerId: FieldRef<"Battle", 'Int'>
    readonly player1Id: FieldRef<"Battle", 'Int'>
    readonly player2Id: FieldRef<"Battle", 'Int'>
    readonly player1HeroId: FieldRef<"Battle", 'Int'>
    readonly player2HeroId: FieldRef<"Battle", 'Int'>
    readonly player1Health: FieldRef<"Battle", 'Int'>
    readonly player2Health: FieldRef<"Battle", 'Int'>
    readonly player1Attack: FieldRef<"Battle", 'Int'>
    readonly player2Attack: FieldRef<"Battle", 'Int'>
    readonly status: FieldRef<"Battle", 'BattleStatus'>
    readonly createdOn: FieldRef<"Battle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Battle findUnique
   */
  export type BattleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle findUniqueOrThrow
   */
  export type BattleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle findFirst
   */
  export type BattleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle findFirstOrThrow
   */
  export type BattleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle findMany
   */
  export type BattleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battles to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle create
   */
  export type BattleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The data needed to create a Battle.
     */
    data?: XOR<BattleCreateInput, BattleUncheckedCreateInput>
  }

  /**
   * Battle createMany
   */
  export type BattleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Battles.
     */
    data: BattleCreateManyInput | BattleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Battle createManyAndReturn
   */
  export type BattleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * The data used to create many Battles.
     */
    data: BattleCreateManyInput | BattleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Battle update
   */
  export type BattleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The data needed to update a Battle.
     */
    data: XOR<BattleUpdateInput, BattleUncheckedUpdateInput>
    /**
     * Choose, which Battle to update.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle updateMany
   */
  export type BattleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Battles.
     */
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyInput>
    /**
     * Filter which Battles to update
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to update.
     */
    limit?: number
  }

  /**
   * Battle updateManyAndReturn
   */
  export type BattleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * The data used to update Battles.
     */
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyInput>
    /**
     * Filter which Battles to update
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Battle upsert
   */
  export type BattleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The filter to search for the Battle to update in case it exists.
     */
    where: BattleWhereUniqueInput
    /**
     * In case the Battle found by the `where` argument doesn't exist, create a new Battle with this data.
     */
    create: XOR<BattleCreateInput, BattleUncheckedCreateInput>
    /**
     * In case the Battle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BattleUpdateInput, BattleUncheckedUpdateInput>
  }

  /**
   * Battle delete
   */
  export type BattleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter which Battle to delete.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle deleteMany
   */
  export type BattleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Battles to delete
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to delete.
     */
    limit?: number
  }

  /**
   * Battle.winner
   */
  export type Battle$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Battle.player1
   */
  export type Battle$player1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Battle.player2
   */
  export type Battle$player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Battle.player1Hero
   */
  export type Battle$player1HeroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    where?: HeroWhereInput
  }

  /**
   * Battle.player2Hero
   */
  export type Battle$player2HeroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    where?: HeroWhereInput
  }

  /**
   * Battle without action
   */
  export type BattleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    heroId: number | null
    health: number | null
    attack: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    heroId: number | null
    health: number | null
    attack: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    imageUrl: string | null
    createdAt: Date | null
    heroId: number | null
    health: number | null
    attack: number | null
    priceType: $Enums.PriceType | null
    type: $Enums.ProductType | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    imageUrl: string | null
    createdAt: Date | null
    heroId: number | null
    health: number | null
    attack: number | null
    priceType: $Enums.PriceType | null
    type: $Enums.ProductType | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    imageUrl: number
    createdAt: number
    heroId: number
    health: number
    attack: number
    priceType: number
    type: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    heroId?: true
    health?: true
    attack?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    heroId?: true
    health?: true
    attack?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imageUrl?: true
    createdAt?: true
    heroId?: true
    health?: true
    attack?: true
    priceType?: true
    type?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imageUrl?: true
    createdAt?: true
    heroId?: true
    health?: true
    attack?: true
    priceType?: true
    type?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imageUrl?: true
    createdAt?: true
    heroId?: true
    health?: true
    attack?: true
    priceType?: true
    type?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    price: number
    imageUrl: string
    createdAt: Date
    heroId: number | null
    health: number | null
    attack: number | null
    priceType: $Enums.PriceType
    type: $Enums.ProductType
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    heroId?: boolean
    health?: boolean
    attack?: boolean
    priceType?: boolean
    type?: boolean
    userProducts?: boolean | Product$userProductsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    heroId?: boolean
    health?: boolean
    attack?: boolean
    priceType?: boolean
    type?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    heroId?: boolean
    health?: boolean
    attack?: boolean
    priceType?: boolean
    type?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    heroId?: boolean
    health?: boolean
    attack?: boolean
    priceType?: boolean
    type?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "imageUrl" | "createdAt" | "heroId" | "health" | "attack" | "priceType" | "type", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProducts?: boolean | Product$userProductsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      userProducts: Prisma.$UserProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      imageUrl: string
      createdAt: Date
      heroId: number | null
      health: number | null
      attack: number | null
      priceType: $Enums.PriceType
      type: $Enums.ProductType
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProducts<T extends Product$userProductsArgs<ExtArgs> = {}>(args?: Subset<T, Product$userProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly heroId: FieldRef<"Product", 'Int'>
    readonly health: FieldRef<"Product", 'Int'>
    readonly attack: FieldRef<"Product", 'Int'>
    readonly priceType: FieldRef<"Product", 'PriceType'>
    readonly type: FieldRef<"Product", 'ProductType'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.userProducts
   */
  export type Product$userProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    where?: UserProductWhereInput
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    cursor?: UserProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model UserProduct
   */

  export type AggregateUserProduct = {
    _count: UserProductCountAggregateOutputType | null
    _avg: UserProductAvgAggregateOutputType | null
    _sum: UserProductSumAggregateOutputType | null
    _min: UserProductMinAggregateOutputType | null
    _max: UserProductMaxAggregateOutputType | null
  }

  export type UserProductAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type UserProductSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type UserProductMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    createdAt: Date | null
  }

  export type UserProductMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
    createdAt: Date | null
  }

  export type UserProductCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: number
    _all: number
  }


  export type UserProductAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type UserProductSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type UserProductMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type UserProductMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type UserProductCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type UserProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProduct to aggregate.
     */
    where?: UserProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProducts to fetch.
     */
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProducts
    **/
    _count?: true | UserProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProductMaxAggregateInputType
  }

  export type GetUserProductAggregateType<T extends UserProductAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProduct[P]>
      : GetScalarType<T[P], AggregateUserProduct[P]>
  }




  export type UserProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductWhereInput
    orderBy?: UserProductOrderByWithAggregationInput | UserProductOrderByWithAggregationInput[]
    by: UserProductScalarFieldEnum[] | UserProductScalarFieldEnum
    having?: UserProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProductCountAggregateInputType | true
    _avg?: UserProductAvgAggregateInputType
    _sum?: UserProductSumAggregateInputType
    _min?: UserProductMinAggregateInputType
    _max?: UserProductMaxAggregateInputType
  }

  export type UserProductGroupByOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: Date
    _count: UserProductCountAggregateOutputType | null
    _avg: UserProductAvgAggregateOutputType | null
    _sum: UserProductSumAggregateOutputType | null
    _min: UserProductMinAggregateOutputType | null
    _max: UserProductMaxAggregateOutputType | null
  }

  type GetUserProductGroupByPayload<T extends UserProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProductGroupByOutputType[P]>
            : GetScalarType<T[P], UserProductGroupByOutputType[P]>
        }
      >
    >


  export type UserProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProduct"]>

  export type UserProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProduct"]>

  export type UserProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProduct"]>

  export type UserProductSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type UserProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "createdAt", ExtArgs["result"]["userProduct"]>
  export type UserProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProduct"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productId: number
      createdAt: Date
    }, ExtArgs["result"]["userProduct"]>
    composites: {}
  }

  type UserProductGetPayload<S extends boolean | null | undefined | UserProductDefaultArgs> = $Result.GetResult<Prisma.$UserProductPayload, S>

  type UserProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProductCountAggregateInputType | true
    }

  export interface UserProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProduct'], meta: { name: 'UserProduct' } }
    /**
     * Find zero or one UserProduct that matches the filter.
     * @param {UserProductFindUniqueArgs} args - Arguments to find a UserProduct
     * @example
     * // Get one UserProduct
     * const userProduct = await prisma.userProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProductFindUniqueArgs>(args: SelectSubset<T, UserProductFindUniqueArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProductFindUniqueOrThrowArgs} args - Arguments to find a UserProduct
     * @example
     * // Get one UserProduct
     * const userProduct = await prisma.userProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProductFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductFindFirstArgs} args - Arguments to find a UserProduct
     * @example
     * // Get one UserProduct
     * const userProduct = await prisma.userProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProductFindFirstArgs>(args?: SelectSubset<T, UserProductFindFirstArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductFindFirstOrThrowArgs} args - Arguments to find a UserProduct
     * @example
     * // Get one UserProduct
     * const userProduct = await prisma.userProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProductFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProducts
     * const userProducts = await prisma.userProduct.findMany()
     * 
     * // Get first 10 UserProducts
     * const userProducts = await prisma.userProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProductWithIdOnly = await prisma.userProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProductFindManyArgs>(args?: SelectSubset<T, UserProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProduct.
     * @param {UserProductCreateArgs} args - Arguments to create a UserProduct.
     * @example
     * // Create one UserProduct
     * const UserProduct = await prisma.userProduct.create({
     *   data: {
     *     // ... data to create a UserProduct
     *   }
     * })
     * 
     */
    create<T extends UserProductCreateArgs>(args: SelectSubset<T, UserProductCreateArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProducts.
     * @param {UserProductCreateManyArgs} args - Arguments to create many UserProducts.
     * @example
     * // Create many UserProducts
     * const userProduct = await prisma.userProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProductCreateManyArgs>(args?: SelectSubset<T, UserProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProducts and returns the data saved in the database.
     * @param {UserProductCreateManyAndReturnArgs} args - Arguments to create many UserProducts.
     * @example
     * // Create many UserProducts
     * const userProduct = await prisma.userProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProducts and only return the `id`
     * const userProductWithIdOnly = await prisma.userProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProductCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProduct.
     * @param {UserProductDeleteArgs} args - Arguments to delete one UserProduct.
     * @example
     * // Delete one UserProduct
     * const UserProduct = await prisma.userProduct.delete({
     *   where: {
     *     // ... filter to delete one UserProduct
     *   }
     * })
     * 
     */
    delete<T extends UserProductDeleteArgs>(args: SelectSubset<T, UserProductDeleteArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProduct.
     * @param {UserProductUpdateArgs} args - Arguments to update one UserProduct.
     * @example
     * // Update one UserProduct
     * const userProduct = await prisma.userProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProductUpdateArgs>(args: SelectSubset<T, UserProductUpdateArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProducts.
     * @param {UserProductDeleteManyArgs} args - Arguments to filter UserProducts to delete.
     * @example
     * // Delete a few UserProducts
     * const { count } = await prisma.userProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProductDeleteManyArgs>(args?: SelectSubset<T, UserProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProducts
     * const userProduct = await prisma.userProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProductUpdateManyArgs>(args: SelectSubset<T, UserProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProducts and returns the data updated in the database.
     * @param {UserProductUpdateManyAndReturnArgs} args - Arguments to update many UserProducts.
     * @example
     * // Update many UserProducts
     * const userProduct = await prisma.userProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProducts and only return the `id`
     * const userProductWithIdOnly = await prisma.userProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProductUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProduct.
     * @param {UserProductUpsertArgs} args - Arguments to update or create a UserProduct.
     * @example
     * // Update or create a UserProduct
     * const userProduct = await prisma.userProduct.upsert({
     *   create: {
     *     // ... data to create a UserProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProduct we want to update
     *   }
     * })
     */
    upsert<T extends UserProductUpsertArgs>(args: SelectSubset<T, UserProductUpsertArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductCountArgs} args - Arguments to filter UserProducts to count.
     * @example
     * // Count the number of UserProducts
     * const count = await prisma.userProduct.count({
     *   where: {
     *     // ... the filter for the UserProducts we want to count
     *   }
     * })
    **/
    count<T extends UserProductCountArgs>(
      args?: Subset<T, UserProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProductAggregateArgs>(args: Subset<T, UserProductAggregateArgs>): Prisma.PrismaPromise<GetUserProductAggregateType<T>>

    /**
     * Group by UserProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProductGroupByArgs['orderBy'] }
        : { orderBy?: UserProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProduct model
   */
  readonly fields: UserProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProduct model
   */
  interface UserProductFieldRefs {
    readonly id: FieldRef<"UserProduct", 'Int'>
    readonly userId: FieldRef<"UserProduct", 'Int'>
    readonly productId: FieldRef<"UserProduct", 'Int'>
    readonly createdAt: FieldRef<"UserProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProduct findUnique
   */
  export type UserProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProduct to fetch.
     */
    where: UserProductWhereUniqueInput
  }

  /**
   * UserProduct findUniqueOrThrow
   */
  export type UserProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProduct to fetch.
     */
    where: UserProductWhereUniqueInput
  }

  /**
   * UserProduct findFirst
   */
  export type UserProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProduct to fetch.
     */
    where?: UserProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProducts to fetch.
     */
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProducts.
     */
    cursor?: UserProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProducts.
     */
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * UserProduct findFirstOrThrow
   */
  export type UserProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProduct to fetch.
     */
    where?: UserProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProducts to fetch.
     */
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProducts.
     */
    cursor?: UserProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProducts.
     */
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * UserProduct findMany
   */
  export type UserProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProducts to fetch.
     */
    where?: UserProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProducts to fetch.
     */
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProducts.
     */
    cursor?: UserProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProducts.
     */
    skip?: number
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * UserProduct create
   */
  export type UserProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProduct.
     */
    data: XOR<UserProductCreateInput, UserProductUncheckedCreateInput>
  }

  /**
   * UserProduct createMany
   */
  export type UserProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProducts.
     */
    data: UserProductCreateManyInput | UserProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProduct createManyAndReturn
   */
  export type UserProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * The data used to create many UserProducts.
     */
    data: UserProductCreateManyInput | UserProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProduct update
   */
  export type UserProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProduct.
     */
    data: XOR<UserProductUpdateInput, UserProductUncheckedUpdateInput>
    /**
     * Choose, which UserProduct to update.
     */
    where: UserProductWhereUniqueInput
  }

  /**
   * UserProduct updateMany
   */
  export type UserProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProducts.
     */
    data: XOR<UserProductUpdateManyMutationInput, UserProductUncheckedUpdateManyInput>
    /**
     * Filter which UserProducts to update
     */
    where?: UserProductWhereInput
    /**
     * Limit how many UserProducts to update.
     */
    limit?: number
  }

  /**
   * UserProduct updateManyAndReturn
   */
  export type UserProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * The data used to update UserProducts.
     */
    data: XOR<UserProductUpdateManyMutationInput, UserProductUncheckedUpdateManyInput>
    /**
     * Filter which UserProducts to update
     */
    where?: UserProductWhereInput
    /**
     * Limit how many UserProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProduct upsert
   */
  export type UserProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProduct to update in case it exists.
     */
    where: UserProductWhereUniqueInput
    /**
     * In case the UserProduct found by the `where` argument doesn't exist, create a new UserProduct with this data.
     */
    create: XOR<UserProductCreateInput, UserProductUncheckedCreateInput>
    /**
     * In case the UserProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProductUpdateInput, UserProductUncheckedUpdateInput>
  }

  /**
   * UserProduct delete
   */
  export type UserProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter which UserProduct to delete.
     */
    where: UserProductWhereUniqueInput
  }

  /**
   * UserProduct deleteMany
   */
  export type UserProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProducts to delete
     */
    where?: UserProductWhereInput
    /**
     * Limit how many UserProducts to delete.
     */
    limit?: number
  }

  /**
   * UserProduct without action
   */
  export type UserProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    photoUrl: 'photoUrl',
    telegramLanguage: 'telegramLanguage',
    telegramId: 'telegramId',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    lastLoginAt: 'lastLoginAt',
    balance: 'balance',
    crystal: 'crystal',
    isPremium: 'isPremium',
    walletAddress: 'walletAddress',
    streak: 'streak',
    dailyAvaliable: 'dailyAvaliable',
    miningTimeInSeconds: 'miningTimeInSeconds',
    miningProfit: 'miningProfit'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    id: 'id',
    inviterId: 'inviterId',
    userId: 'userId',
    earned: 'earned',
    createdOn: 'createdOn'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const MiningScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    startedAt: 'startedAt',
    expiresAt: 'expiresAt',
    finishedAt: 'finishedAt'
  };

  export type MiningScalarFieldEnum = (typeof MiningScalarFieldEnum)[keyof typeof MiningScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    reward: 'reward',
    imageUrl: 'imageUrl',
    link: 'link',
    channelId: 'channelId',
    createdOn: 'createdOn',
    type: 'type'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserTaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    taskId: 'taskId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type UserTaskScalarFieldEnum = (typeof UserTaskScalarFieldEnum)[keyof typeof UserTaskScalarFieldEnum]


  export const HeroScalarFieldEnum: {
    id: 'id',
    health: 'health',
    attack: 'attack',
    name: 'name',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type HeroScalarFieldEnum = (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum]


  export const UserHeroScalarFieldEnum: {
    id: 'id',
    heroId: 'heroId',
    userId: 'userId',
    createdOn: 'createdOn'
  };

  export type UserHeroScalarFieldEnum = (typeof UserHeroScalarFieldEnum)[keyof typeof UserHeroScalarFieldEnum]


  export const BattleScalarFieldEnum: {
    id: 'id',
    winnerId: 'winnerId',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    player1HeroId: 'player1HeroId',
    player2HeroId: 'player2HeroId',
    player1Health: 'player1Health',
    player2Health: 'player2Health',
    player1Attack: 'player1Attack',
    player2Attack: 'player2Attack',
    status: 'status',
    createdOn: 'createdOn'
  };

  export type BattleScalarFieldEnum = (typeof BattleScalarFieldEnum)[keyof typeof BattleScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    heroId: 'heroId',
    health: 'health',
    attack: 'attack',
    priceType: 'priceType',
    type: 'type'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UserProductScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type UserProductScalarFieldEnum = (typeof UserProductScalarFieldEnum)[keyof typeof UserProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'BattleStatus'
   */
  export type EnumBattleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BattleStatus'>
    


  /**
   * Reference to a field of type 'BattleStatus[]'
   */
  export type ListEnumBattleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BattleStatus[]'>
    


  /**
   * Reference to a field of type 'PriceType'
   */
  export type EnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType'>
    


  /**
   * Reference to a field of type 'PriceType[]'
   */
  export type ListEnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType[]'>
    


  /**
   * Reference to a field of type 'ProductType'
   */
  export type EnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType'>
    


  /**
   * Reference to a field of type 'ProductType[]'
   */
  export type ListEnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    photoUrl?: StringNullableFilter<"User"> | string | null
    telegramLanguage?: StringFilter<"User"> | string
    telegramId?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    balance?: IntFilter<"User"> | number
    crystal?: IntFilter<"User"> | number
    isPremium?: BoolFilter<"User"> | boolean
    walletAddress?: StringNullableFilter<"User"> | string | null
    streak?: IntFilter<"User"> | number
    dailyAvaliable?: BoolFilter<"User"> | boolean
    miningTimeInSeconds?: IntFilter<"User"> | number
    miningProfit?: FloatFilter<"User"> | number
    invitedUsers?: FriendListRelationFilter
    friend?: XOR<FriendNullableScalarRelationFilter, FriendWhereInput> | null
    minings?: MiningListRelationFilter
    userTasks?: UserTaskListRelationFilter
    userHeroes?: UserHeroListRelationFilter
    battlesAsPlayer1?: BattleListRelationFilter
    battlesAsPlayer2?: BattleListRelationFilter
    wonBattles?: BattleListRelationFilter
    userProducts?: UserProductListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    telegramLanguage?: SortOrder
    telegramId?: SortOrder
    username?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
    balance?: SortOrder
    crystal?: SortOrder
    isPremium?: SortOrder
    walletAddress?: SortOrderInput | SortOrder
    streak?: SortOrder
    dailyAvaliable?: SortOrder
    miningTimeInSeconds?: SortOrder
    miningProfit?: SortOrder
    invitedUsers?: FriendOrderByRelationAggregateInput
    friend?: FriendOrderByWithRelationInput
    minings?: MiningOrderByRelationAggregateInput
    userTasks?: UserTaskOrderByRelationAggregateInput
    userHeroes?: UserHeroOrderByRelationAggregateInput
    battlesAsPlayer1?: BattleOrderByRelationAggregateInput
    battlesAsPlayer2?: BattleOrderByRelationAggregateInput
    wonBattles?: BattleOrderByRelationAggregateInput
    userProducts?: UserProductOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telegramId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    photoUrl?: StringNullableFilter<"User"> | string | null
    telegramLanguage?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    balance?: IntFilter<"User"> | number
    crystal?: IntFilter<"User"> | number
    isPremium?: BoolFilter<"User"> | boolean
    walletAddress?: StringNullableFilter<"User"> | string | null
    streak?: IntFilter<"User"> | number
    dailyAvaliable?: BoolFilter<"User"> | boolean
    miningTimeInSeconds?: IntFilter<"User"> | number
    miningProfit?: FloatFilter<"User"> | number
    invitedUsers?: FriendListRelationFilter
    friend?: XOR<FriendNullableScalarRelationFilter, FriendWhereInput> | null
    minings?: MiningListRelationFilter
    userTasks?: UserTaskListRelationFilter
    userHeroes?: UserHeroListRelationFilter
    battlesAsPlayer1?: BattleListRelationFilter
    battlesAsPlayer2?: BattleListRelationFilter
    wonBattles?: BattleListRelationFilter
    userProducts?: UserProductListRelationFilter
  }, "id" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    telegramLanguage?: SortOrder
    telegramId?: SortOrder
    username?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
    balance?: SortOrder
    crystal?: SortOrder
    isPremium?: SortOrder
    walletAddress?: SortOrderInput | SortOrder
    streak?: SortOrder
    dailyAvaliable?: SortOrder
    miningTimeInSeconds?: SortOrder
    miningProfit?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramLanguage?: StringWithAggregatesFilter<"User"> | string
    telegramId?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    balance?: IntWithAggregatesFilter<"User"> | number
    crystal?: IntWithAggregatesFilter<"User"> | number
    isPremium?: BoolWithAggregatesFilter<"User"> | boolean
    walletAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    streak?: IntWithAggregatesFilter<"User"> | number
    dailyAvaliable?: BoolWithAggregatesFilter<"User"> | boolean
    miningTimeInSeconds?: IntWithAggregatesFilter<"User"> | number
    miningProfit?: FloatWithAggregatesFilter<"User"> | number
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    id?: IntFilter<"Friend"> | number
    inviterId?: IntFilter<"Friend"> | number
    userId?: IntFilter<"Friend"> | number
    earned?: FloatFilter<"Friend"> | number
    createdOn?: DateTimeFilter<"Friend"> | Date | string
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendOrderByWithRelationInput = {
    id?: SortOrder
    inviterId?: SortOrder
    userId?: SortOrder
    earned?: SortOrder
    createdOn?: SortOrder
    inviter?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    inviterId?: IntFilter<"Friend"> | number
    earned?: FloatFilter<"Friend"> | number
    createdOn?: DateTimeFilter<"Friend"> | Date | string
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type FriendOrderByWithAggregationInput = {
    id?: SortOrder
    inviterId?: SortOrder
    userId?: SortOrder
    earned?: SortOrder
    createdOn?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _avg?: FriendAvgOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
    _sum?: FriendSumOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friend"> | number
    inviterId?: IntWithAggregatesFilter<"Friend"> | number
    userId?: IntWithAggregatesFilter<"Friend"> | number
    earned?: FloatWithAggregatesFilter<"Friend"> | number
    createdOn?: DateTimeWithAggregatesFilter<"Friend"> | Date | string
  }

  export type MiningWhereInput = {
    AND?: MiningWhereInput | MiningWhereInput[]
    OR?: MiningWhereInput[]
    NOT?: MiningWhereInput | MiningWhereInput[]
    id?: IntFilter<"Mining"> | number
    userId?: IntFilter<"Mining"> | number
    amount?: FloatFilter<"Mining"> | number
    startedAt?: DateTimeFilter<"Mining"> | Date | string
    expiresAt?: DateTimeFilter<"Mining"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Mining"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MiningOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MiningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MiningWhereInput | MiningWhereInput[]
    OR?: MiningWhereInput[]
    NOT?: MiningWhereInput | MiningWhereInput[]
    userId?: IntFilter<"Mining"> | number
    amount?: FloatFilter<"Mining"> | number
    startedAt?: DateTimeFilter<"Mining"> | Date | string
    expiresAt?: DateTimeFilter<"Mining"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Mining"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MiningOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    _count?: MiningCountOrderByAggregateInput
    _avg?: MiningAvgOrderByAggregateInput
    _max?: MiningMaxOrderByAggregateInput
    _min?: MiningMinOrderByAggregateInput
    _sum?: MiningSumOrderByAggregateInput
  }

  export type MiningScalarWhereWithAggregatesInput = {
    AND?: MiningScalarWhereWithAggregatesInput | MiningScalarWhereWithAggregatesInput[]
    OR?: MiningScalarWhereWithAggregatesInput[]
    NOT?: MiningScalarWhereWithAggregatesInput | MiningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mining"> | number
    userId?: IntWithAggregatesFilter<"Mining"> | number
    amount?: FloatWithAggregatesFilter<"Mining"> | number
    startedAt?: DateTimeWithAggregatesFilter<"Mining"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Mining"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Mining"> | Date | string | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    reward?: FloatFilter<"Task"> | number
    imageUrl?: StringFilter<"Task"> | string
    link?: StringNullableFilter<"Task"> | string | null
    channelId?: StringNullableFilter<"Task"> | string | null
    createdOn?: DateTimeFilter<"Task"> | Date | string
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    userTasks?: UserTaskListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    reward?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrderInput | SortOrder
    channelId?: SortOrderInput | SortOrder
    createdOn?: SortOrder
    type?: SortOrder
    userTasks?: UserTaskOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    reward?: FloatFilter<"Task"> | number
    imageUrl?: StringFilter<"Task"> | string
    link?: StringNullableFilter<"Task"> | string | null
    channelId?: StringNullableFilter<"Task"> | string | null
    createdOn?: DateTimeFilter<"Task"> | Date | string
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    userTasks?: UserTaskListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    reward?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrderInput | SortOrder
    channelId?: SortOrderInput | SortOrder
    createdOn?: SortOrder
    type?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    reward?: FloatWithAggregatesFilter<"Task"> | number
    imageUrl?: StringWithAggregatesFilter<"Task"> | string
    link?: StringNullableWithAggregatesFilter<"Task"> | string | null
    channelId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdOn?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    type?: EnumTaskTypeWithAggregatesFilter<"Task"> | $Enums.TaskType
  }

  export type UserTaskWhereInput = {
    AND?: UserTaskWhereInput | UserTaskWhereInput[]
    OR?: UserTaskWhereInput[]
    NOT?: UserTaskWhereInput | UserTaskWhereInput[]
    id?: IntFilter<"UserTask"> | number
    userId?: IntFilter<"UserTask"> | number
    taskId?: IntFilter<"UserTask"> | number
    status?: EnumTaskStatusFilter<"UserTask"> | $Enums.TaskStatus
    createdAt?: DateTimeFilter<"UserTask"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserTaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_taskId?: UserTaskUserIdTaskIdCompoundUniqueInput
    AND?: UserTaskWhereInput | UserTaskWhereInput[]
    OR?: UserTaskWhereInput[]
    NOT?: UserTaskWhereInput | UserTaskWhereInput[]
    userId?: IntFilter<"UserTask"> | number
    taskId?: IntFilter<"UserTask"> | number
    status?: EnumTaskStatusFilter<"UserTask"> | $Enums.TaskStatus
    createdAt?: DateTimeFilter<"UserTask"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_taskId">

  export type UserTaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: UserTaskCountOrderByAggregateInput
    _avg?: UserTaskAvgOrderByAggregateInput
    _max?: UserTaskMaxOrderByAggregateInput
    _min?: UserTaskMinOrderByAggregateInput
    _sum?: UserTaskSumOrderByAggregateInput
  }

  export type UserTaskScalarWhereWithAggregatesInput = {
    AND?: UserTaskScalarWhereWithAggregatesInput | UserTaskScalarWhereWithAggregatesInput[]
    OR?: UserTaskScalarWhereWithAggregatesInput[]
    NOT?: UserTaskScalarWhereWithAggregatesInput | UserTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserTask"> | number
    userId?: IntWithAggregatesFilter<"UserTask"> | number
    taskId?: IntWithAggregatesFilter<"UserTask"> | number
    status?: EnumTaskStatusWithAggregatesFilter<"UserTask"> | $Enums.TaskStatus
    createdAt?: DateTimeWithAggregatesFilter<"UserTask"> | Date | string
  }

  export type HeroWhereInput = {
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    id?: IntFilter<"Hero"> | number
    health?: IntFilter<"Hero"> | number
    attack?: IntFilter<"Hero"> | number
    name?: StringFilter<"Hero"> | string
    imageUrl?: StringFilter<"Hero"> | string
    createdAt?: DateTimeFilter<"Hero"> | Date | string
    battlesAsPlayer1?: BattleListRelationFilter
    battlesAsPlayer2?: BattleListRelationFilter
    userHeroes?: UserHeroListRelationFilter
  }

  export type HeroOrderByWithRelationInput = {
    id?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    battlesAsPlayer1?: BattleOrderByRelationAggregateInput
    battlesAsPlayer2?: BattleOrderByRelationAggregateInput
    userHeroes?: UserHeroOrderByRelationAggregateInput
  }

  export type HeroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    health?: IntFilter<"Hero"> | number
    attack?: IntFilter<"Hero"> | number
    imageUrl?: StringFilter<"Hero"> | string
    createdAt?: DateTimeFilter<"Hero"> | Date | string
    battlesAsPlayer1?: BattleListRelationFilter
    battlesAsPlayer2?: BattleListRelationFilter
    userHeroes?: UserHeroListRelationFilter
  }, "id" | "name">

  export type HeroOrderByWithAggregationInput = {
    id?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    _count?: HeroCountOrderByAggregateInput
    _avg?: HeroAvgOrderByAggregateInput
    _max?: HeroMaxOrderByAggregateInput
    _min?: HeroMinOrderByAggregateInput
    _sum?: HeroSumOrderByAggregateInput
  }

  export type HeroScalarWhereWithAggregatesInput = {
    AND?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    OR?: HeroScalarWhereWithAggregatesInput[]
    NOT?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hero"> | number
    health?: IntWithAggregatesFilter<"Hero"> | number
    attack?: IntWithAggregatesFilter<"Hero"> | number
    name?: StringWithAggregatesFilter<"Hero"> | string
    imageUrl?: StringWithAggregatesFilter<"Hero"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hero"> | Date | string
  }

  export type UserHeroWhereInput = {
    AND?: UserHeroWhereInput | UserHeroWhereInput[]
    OR?: UserHeroWhereInput[]
    NOT?: UserHeroWhereInput | UserHeroWhereInput[]
    id?: IntFilter<"UserHero"> | number
    heroId?: IntFilter<"UserHero"> | number
    userId?: IntFilter<"UserHero"> | number
    createdOn?: DateTimeFilter<"UserHero"> | Date | string
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserHeroOrderByWithRelationInput = {
    id?: SortOrder
    heroId?: SortOrder
    userId?: SortOrder
    createdOn?: SortOrder
    hero?: HeroOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserHeroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_heroId?: UserHeroUserIdHeroIdCompoundUniqueInput
    AND?: UserHeroWhereInput | UserHeroWhereInput[]
    OR?: UserHeroWhereInput[]
    NOT?: UserHeroWhereInput | UserHeroWhereInput[]
    heroId?: IntFilter<"UserHero"> | number
    userId?: IntFilter<"UserHero"> | number
    createdOn?: DateTimeFilter<"UserHero"> | Date | string
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_heroId">

  export type UserHeroOrderByWithAggregationInput = {
    id?: SortOrder
    heroId?: SortOrder
    userId?: SortOrder
    createdOn?: SortOrder
    _count?: UserHeroCountOrderByAggregateInput
    _avg?: UserHeroAvgOrderByAggregateInput
    _max?: UserHeroMaxOrderByAggregateInput
    _min?: UserHeroMinOrderByAggregateInput
    _sum?: UserHeroSumOrderByAggregateInput
  }

  export type UserHeroScalarWhereWithAggregatesInput = {
    AND?: UserHeroScalarWhereWithAggregatesInput | UserHeroScalarWhereWithAggregatesInput[]
    OR?: UserHeroScalarWhereWithAggregatesInput[]
    NOT?: UserHeroScalarWhereWithAggregatesInput | UserHeroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserHero"> | number
    heroId?: IntWithAggregatesFilter<"UserHero"> | number
    userId?: IntWithAggregatesFilter<"UserHero"> | number
    createdOn?: DateTimeWithAggregatesFilter<"UserHero"> | Date | string
  }

  export type BattleWhereInput = {
    AND?: BattleWhereInput | BattleWhereInput[]
    OR?: BattleWhereInput[]
    NOT?: BattleWhereInput | BattleWhereInput[]
    id?: IntFilter<"Battle"> | number
    winnerId?: IntNullableFilter<"Battle"> | number | null
    player1Id?: IntNullableFilter<"Battle"> | number | null
    player2Id?: IntNullableFilter<"Battle"> | number | null
    player1HeroId?: IntNullableFilter<"Battle"> | number | null
    player2HeroId?: IntNullableFilter<"Battle"> | number | null
    player1Health?: IntNullableFilter<"Battle"> | number | null
    player2Health?: IntNullableFilter<"Battle"> | number | null
    player1Attack?: IntNullableFilter<"Battle"> | number | null
    player2Attack?: IntNullableFilter<"Battle"> | number | null
    status?: EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus
    createdOn?: DateTimeFilter<"Battle"> | Date | string
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player1?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player1Hero?: XOR<HeroNullableScalarRelationFilter, HeroWhereInput> | null
    player2Hero?: XOR<HeroNullableScalarRelationFilter, HeroWhereInput> | null
  }

  export type BattleOrderByWithRelationInput = {
    id?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    player1Id?: SortOrderInput | SortOrder
    player2Id?: SortOrderInput | SortOrder
    player1HeroId?: SortOrderInput | SortOrder
    player2HeroId?: SortOrderInput | SortOrder
    player1Health?: SortOrderInput | SortOrder
    player2Health?: SortOrderInput | SortOrder
    player1Attack?: SortOrderInput | SortOrder
    player2Attack?: SortOrderInput | SortOrder
    status?: SortOrder
    createdOn?: SortOrder
    winner?: UserOrderByWithRelationInput
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    player1Hero?: HeroOrderByWithRelationInput
    player2Hero?: HeroOrderByWithRelationInput
  }

  export type BattleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BattleWhereInput | BattleWhereInput[]
    OR?: BattleWhereInput[]
    NOT?: BattleWhereInput | BattleWhereInput[]
    winnerId?: IntNullableFilter<"Battle"> | number | null
    player1Id?: IntNullableFilter<"Battle"> | number | null
    player2Id?: IntNullableFilter<"Battle"> | number | null
    player1HeroId?: IntNullableFilter<"Battle"> | number | null
    player2HeroId?: IntNullableFilter<"Battle"> | number | null
    player1Health?: IntNullableFilter<"Battle"> | number | null
    player2Health?: IntNullableFilter<"Battle"> | number | null
    player1Attack?: IntNullableFilter<"Battle"> | number | null
    player2Attack?: IntNullableFilter<"Battle"> | number | null
    status?: EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus
    createdOn?: DateTimeFilter<"Battle"> | Date | string
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player1?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player1Hero?: XOR<HeroNullableScalarRelationFilter, HeroWhereInput> | null
    player2Hero?: XOR<HeroNullableScalarRelationFilter, HeroWhereInput> | null
  }, "id">

  export type BattleOrderByWithAggregationInput = {
    id?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    player1Id?: SortOrderInput | SortOrder
    player2Id?: SortOrderInput | SortOrder
    player1HeroId?: SortOrderInput | SortOrder
    player2HeroId?: SortOrderInput | SortOrder
    player1Health?: SortOrderInput | SortOrder
    player2Health?: SortOrderInput | SortOrder
    player1Attack?: SortOrderInput | SortOrder
    player2Attack?: SortOrderInput | SortOrder
    status?: SortOrder
    createdOn?: SortOrder
    _count?: BattleCountOrderByAggregateInput
    _avg?: BattleAvgOrderByAggregateInput
    _max?: BattleMaxOrderByAggregateInput
    _min?: BattleMinOrderByAggregateInput
    _sum?: BattleSumOrderByAggregateInput
  }

  export type BattleScalarWhereWithAggregatesInput = {
    AND?: BattleScalarWhereWithAggregatesInput | BattleScalarWhereWithAggregatesInput[]
    OR?: BattleScalarWhereWithAggregatesInput[]
    NOT?: BattleScalarWhereWithAggregatesInput | BattleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Battle"> | number
    winnerId?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player1Id?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player2Id?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player1HeroId?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player2HeroId?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player1Health?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player2Health?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player1Attack?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player2Attack?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    status?: EnumBattleStatusWithAggregatesFilter<"Battle"> | $Enums.BattleStatus
    createdOn?: DateTimeWithAggregatesFilter<"Battle"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    heroId?: IntNullableFilter<"Product"> | number | null
    health?: IntNullableFilter<"Product"> | number | null
    attack?: IntNullableFilter<"Product"> | number | null
    priceType?: EnumPriceTypeFilter<"Product"> | $Enums.PriceType
    type?: EnumProductTypeFilter<"Product"> | $Enums.ProductType
    userProducts?: UserProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    heroId?: SortOrderInput | SortOrder
    health?: SortOrderInput | SortOrder
    attack?: SortOrderInput | SortOrder
    priceType?: SortOrder
    type?: SortOrder
    userProducts?: UserProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    heroId?: IntNullableFilter<"Product"> | number | null
    health?: IntNullableFilter<"Product"> | number | null
    attack?: IntNullableFilter<"Product"> | number | null
    priceType?: EnumPriceTypeFilter<"Product"> | $Enums.PriceType
    type?: EnumProductTypeFilter<"Product"> | $Enums.ProductType
    userProducts?: UserProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    heroId?: SortOrderInput | SortOrder
    health?: SortOrderInput | SortOrder
    attack?: SortOrderInput | SortOrder
    priceType?: SortOrder
    type?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    heroId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    health?: IntNullableWithAggregatesFilter<"Product"> | number | null
    attack?: IntNullableWithAggregatesFilter<"Product"> | number | null
    priceType?: EnumPriceTypeWithAggregatesFilter<"Product"> | $Enums.PriceType
    type?: EnumProductTypeWithAggregatesFilter<"Product"> | $Enums.ProductType
  }

  export type UserProductWhereInput = {
    AND?: UserProductWhereInput | UserProductWhereInput[]
    OR?: UserProductWhereInput[]
    NOT?: UserProductWhereInput | UserProductWhereInput[]
    id?: IntFilter<"UserProduct"> | number
    userId?: IntFilter<"UserProduct"> | number
    productId?: IntFilter<"UserProduct"> | number
    createdAt?: DateTimeFilter<"UserProduct"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type UserProductOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type UserProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserProductWhereInput | UserProductWhereInput[]
    OR?: UserProductWhereInput[]
    NOT?: UserProductWhereInput | UserProductWhereInput[]
    userId?: IntFilter<"UserProduct"> | number
    productId?: IntFilter<"UserProduct"> | number
    createdAt?: DateTimeFilter<"UserProduct"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type UserProductOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: UserProductCountOrderByAggregateInput
    _avg?: UserProductAvgOrderByAggregateInput
    _max?: UserProductMaxOrderByAggregateInput
    _min?: UserProductMinOrderByAggregateInput
    _sum?: UserProductSumOrderByAggregateInput
  }

  export type UserProductScalarWhereWithAggregatesInput = {
    AND?: UserProductScalarWhereWithAggregatesInput | UserProductScalarWhereWithAggregatesInput[]
    OR?: UserProductScalarWhereWithAggregatesInput[]
    NOT?: UserProductScalarWhereWithAggregatesInput | UserProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProduct"> | number
    userId?: IntWithAggregatesFilter<"UserProduct"> | number
    productId?: IntWithAggregatesFilter<"UserProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserProduct"> | Date | string
  }

  export type AdminCreateInput = {
    email: string
    password: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    friend?: FriendCreateNestedOneWithoutUserInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    friend?: FriendUpdateOneWithoutUserNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
  }

  export type UserUpdateManyMutationInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
  }

  export type FriendCreateInput = {
    earned?: number
    createdOn?: Date | string
    inviter: UserCreateNestedOneWithoutInvitedUsersInput
    user: UserCreateNestedOneWithoutFriendInput
  }

  export type FriendUncheckedCreateInput = {
    id?: number
    inviterId: number
    userId: number
    earned?: number
    createdOn?: Date | string
  }

  export type FriendUpdateInput = {
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutInvitedUsersNestedInput
    user?: UserUpdateOneRequiredWithoutFriendNestedInput
  }

  export type FriendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendCreateManyInput = {
    id?: number
    inviterId: number
    userId: number
    earned?: number
    createdOn?: Date | string
  }

  export type FriendUpdateManyMutationInput = {
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiningCreateInput = {
    amount?: number
    startedAt?: Date | string
    expiresAt: Date | string
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutMiningsInput
  }

  export type MiningUncheckedCreateInput = {
    id?: number
    userId: number
    amount?: number
    startedAt?: Date | string
    expiresAt: Date | string
    finishedAt?: Date | string | null
  }

  export type MiningUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMiningsNestedInput
  }

  export type MiningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MiningCreateManyInput = {
    id?: number
    userId: number
    amount?: number
    startedAt?: Date | string
    expiresAt: Date | string
    finishedAt?: Date | string | null
  }

  export type MiningUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MiningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateInput = {
    title: string
    reward: number
    imageUrl: string
    link?: string | null
    channelId?: string | null
    createdOn?: Date | string
    type?: $Enums.TaskType
    userTasks?: UserTaskCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    reward: number
    imageUrl: string
    link?: string | null
    channelId?: string | null
    createdOn?: Date | string
    type?: $Enums.TaskType
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    userTasks?: UserTaskUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    userTasks?: UserTaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    reward: number
    imageUrl: string
    link?: string | null
    channelId?: string | null
    createdOn?: Date | string
    type?: $Enums.TaskType
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
  }

  export type UserTaskCreateInput = {
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutUserTasksInput
    user: UserCreateNestedOneWithoutUserTasksInput
  }

  export type UserTaskUncheckedCreateInput = {
    id?: number
    userId: number
    taskId: number
    status?: $Enums.TaskStatus
    createdAt?: Date | string
  }

  export type UserTaskUpdateInput = {
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutUserTasksNestedInput
    user?: UserUpdateOneRequiredWithoutUserTasksNestedInput
  }

  export type UserTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskCreateManyInput = {
    id?: number
    userId: number
    taskId: number
    status?: $Enums.TaskStatus
    createdAt?: Date | string
  }

  export type UserTaskUpdateManyMutationInput = {
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroCreateInput = {
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1HeroInput
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2HeroInput
    userHeroes?: UserHeroCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateInput = {
    id?: number
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1HeroInput
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2HeroInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroUpdateInput = {
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1HeroNestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2HeroNestedInput
    userHeroes?: UserHeroUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1HeroNestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2HeroNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type HeroCreateManyInput = {
    id?: number
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
  }

  export type HeroUpdateManyMutationInput = {
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeroCreateInput = {
    createdOn?: Date | string
    hero: HeroCreateNestedOneWithoutUserHeroesInput
    user: UserCreateNestedOneWithoutUserHeroesInput
  }

  export type UserHeroUncheckedCreateInput = {
    id?: number
    heroId: number
    userId: number
    createdOn?: Date | string
  }

  export type UserHeroUpdateInput = {
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    hero?: HeroUpdateOneRequiredWithoutUserHeroesNestedInput
    user?: UserUpdateOneRequiredWithoutUserHeroesNestedInput
  }

  export type UserHeroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeroCreateManyInput = {
    id?: number
    heroId: number
    userId: number
    createdOn?: Date | string
  }

  export type UserHeroUpdateManyMutationInput = {
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleCreateInput = {
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1?: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    player1Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer1Input
    player2Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer2Input
  }

  export type BattleUncheckedCreateInput = {
    id?: number
    winnerId?: number | null
    player1Id?: number | null
    player2Id?: number | null
    player1HeroId?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleUpdateInput = {
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1?: UserUpdateOneWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    player1Hero?: HeroUpdateOneWithoutBattlesAsPlayer1NestedInput
    player2Hero?: HeroUpdateOneWithoutBattlesAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleCreateManyInput = {
    id?: number
    winnerId?: number | null
    player1Id?: number | null
    player2Id?: number | null
    player1HeroId?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleUpdateManyMutationInput = {
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    heroId?: number | null
    health?: number | null
    attack?: number | null
    priceType?: $Enums.PriceType
    type?: $Enums.ProductType
    userProducts?: UserProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    heroId?: number | null
    health?: number | null
    attack?: number | null
    priceType?: $Enums.PriceType
    type?: $Enums.ProductType
    userProducts?: UserProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroId?: NullableIntFieldUpdateOperationsInput | number | null
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    userProducts?: UserProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroId?: NullableIntFieldUpdateOperationsInput | number | null
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    userProducts?: UserProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    heroId?: number | null
    health?: number | null
    attack?: number | null
    priceType?: $Enums.PriceType
    type?: $Enums.ProductType
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroId?: NullableIntFieldUpdateOperationsInput | number | null
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroId?: NullableIntFieldUpdateOperationsInput | number | null
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
  }

  export type UserProductCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserProductsInput
    product: ProductCreateNestedOneWithoutUserProductsInput
  }

  export type UserProductUncheckedCreateInput = {
    id?: number
    userId: number
    productId: number
    createdAt?: Date | string
  }

  export type UserProductUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutUserProductsNestedInput
  }

  export type UserProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductCreateManyInput = {
    id?: number
    userId: number
    productId: number
    createdAt?: Date | string
  }

  export type UserProductUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type FriendNullableScalarRelationFilter = {
    is?: FriendWhereInput | null
    isNot?: FriendWhereInput | null
  }

  export type MiningListRelationFilter = {
    every?: MiningWhereInput
    some?: MiningWhereInput
    none?: MiningWhereInput
  }

  export type UserTaskListRelationFilter = {
    every?: UserTaskWhereInput
    some?: UserTaskWhereInput
    none?: UserTaskWhereInput
  }

  export type UserHeroListRelationFilter = {
    every?: UserHeroWhereInput
    some?: UserHeroWhereInput
    none?: UserHeroWhereInput
  }

  export type BattleListRelationFilter = {
    every?: BattleWhereInput
    some?: BattleWhereInput
    none?: BattleWhereInput
  }

  export type UserProductListRelationFilter = {
    every?: UserProductWhereInput
    some?: UserProductWhereInput
    none?: UserProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MiningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserHeroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BattleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    telegramLanguage?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
    balance?: SortOrder
    crystal?: SortOrder
    isPremium?: SortOrder
    walletAddress?: SortOrder
    streak?: SortOrder
    dailyAvaliable?: SortOrder
    miningTimeInSeconds?: SortOrder
    miningProfit?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    crystal?: SortOrder
    streak?: SortOrder
    miningTimeInSeconds?: SortOrder
    miningProfit?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    telegramLanguage?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
    balance?: SortOrder
    crystal?: SortOrder
    isPremium?: SortOrder
    walletAddress?: SortOrder
    streak?: SortOrder
    dailyAvaliable?: SortOrder
    miningTimeInSeconds?: SortOrder
    miningProfit?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    telegramLanguage?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    lastLoginAt?: SortOrder
    balance?: SortOrder
    crystal?: SortOrder
    isPremium?: SortOrder
    walletAddress?: SortOrder
    streak?: SortOrder
    dailyAvaliable?: SortOrder
    miningTimeInSeconds?: SortOrder
    miningProfit?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    crystal?: SortOrder
    streak?: SortOrder
    miningTimeInSeconds?: SortOrder
    miningProfit?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FriendCountOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    userId?: SortOrder
    earned?: SortOrder
    createdOn?: SortOrder
  }

  export type FriendAvgOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    userId?: SortOrder
    earned?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    userId?: SortOrder
    earned?: SortOrder
    createdOn?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    userId?: SortOrder
    earned?: SortOrder
    createdOn?: SortOrder
  }

  export type FriendSumOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    userId?: SortOrder
    earned?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MiningCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type MiningAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type MiningMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type MiningMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type MiningSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reward?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    channelId?: SortOrder
    createdOn?: SortOrder
    type?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    reward?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reward?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    channelId?: SortOrder
    createdOn?: SortOrder
    type?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reward?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    channelId?: SortOrder
    createdOn?: SortOrder
    type?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    reward?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type UserTaskUserIdTaskIdCompoundUniqueInput = {
    userId: number
    taskId: number
  }

  export type UserTaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTaskAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type UserTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTaskSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type HeroCountOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type HeroAvgOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    attack?: SortOrder
  }

  export type HeroMaxOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type HeroMinOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type HeroSumOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    attack?: SortOrder
  }

  export type HeroScalarRelationFilter = {
    is?: HeroWhereInput
    isNot?: HeroWhereInput
  }

  export type UserHeroUserIdHeroIdCompoundUniqueInput = {
    userId: number
    heroId: number
  }

  export type UserHeroCountOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    userId?: SortOrder
    createdOn?: SortOrder
  }

  export type UserHeroAvgOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    userId?: SortOrder
  }

  export type UserHeroMaxOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    userId?: SortOrder
    createdOn?: SortOrder
  }

  export type UserHeroMinOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    userId?: SortOrder
    createdOn?: SortOrder
  }

  export type UserHeroSumOrderByAggregateInput = {
    id?: SortOrder
    heroId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumBattleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BattleStatus | EnumBattleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBattleStatusFilter<$PrismaModel> | $Enums.BattleStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type HeroNullableScalarRelationFilter = {
    is?: HeroWhereInput | null
    isNot?: HeroWhereInput | null
  }

  export type BattleCountOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1HeroId?: SortOrder
    player2HeroId?: SortOrder
    player1Health?: SortOrder
    player2Health?: SortOrder
    player1Attack?: SortOrder
    player2Attack?: SortOrder
    status?: SortOrder
    createdOn?: SortOrder
  }

  export type BattleAvgOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1HeroId?: SortOrder
    player2HeroId?: SortOrder
    player1Health?: SortOrder
    player2Health?: SortOrder
    player1Attack?: SortOrder
    player2Attack?: SortOrder
  }

  export type BattleMaxOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1HeroId?: SortOrder
    player2HeroId?: SortOrder
    player1Health?: SortOrder
    player2Health?: SortOrder
    player1Attack?: SortOrder
    player2Attack?: SortOrder
    status?: SortOrder
    createdOn?: SortOrder
  }

  export type BattleMinOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1HeroId?: SortOrder
    player2HeroId?: SortOrder
    player1Health?: SortOrder
    player2Health?: SortOrder
    player1Attack?: SortOrder
    player2Attack?: SortOrder
    status?: SortOrder
    createdOn?: SortOrder
  }

  export type BattleSumOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1HeroId?: SortOrder
    player2HeroId?: SortOrder
    player1Health?: SortOrder
    player2Health?: SortOrder
    player1Attack?: SortOrder
    player2Attack?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumBattleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BattleStatus | EnumBattleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBattleStatusWithAggregatesFilter<$PrismaModel> | $Enums.BattleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBattleStatusFilter<$PrismaModel>
    _max?: NestedEnumBattleStatusFilter<$PrismaModel>
  }

  export type EnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type EnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    heroId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    priceType?: SortOrder
    type?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    heroId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    heroId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    priceType?: SortOrder
    type?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    heroId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
    priceType?: SortOrder
    type?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    heroId?: SortOrder
    health?: SortOrder
    attack?: SortOrder
  }

  export type EnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type EnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UserProductCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserProductAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserProductMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserProductMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserProductSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FriendCreateNestedManyWithoutInviterInput = {
    create?: XOR<FriendCreateWithoutInviterInput, FriendUncheckedCreateWithoutInviterInput> | FriendCreateWithoutInviterInput[] | FriendUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutInviterInput | FriendCreateOrConnectWithoutInviterInput[]
    createMany?: FriendCreateManyInviterInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendCreateNestedOneWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput
    connect?: FriendWhereUniqueInput
  }

  export type MiningCreateNestedManyWithoutUserInput = {
    create?: XOR<MiningCreateWithoutUserInput, MiningUncheckedCreateWithoutUserInput> | MiningCreateWithoutUserInput[] | MiningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MiningCreateOrConnectWithoutUserInput | MiningCreateOrConnectWithoutUserInput[]
    createMany?: MiningCreateManyUserInputEnvelope
    connect?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
  }

  export type UserTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTaskCreateWithoutUserInput, UserTaskUncheckedCreateWithoutUserInput> | UserTaskCreateWithoutUserInput[] | UserTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskCreateOrConnectWithoutUserInput | UserTaskCreateOrConnectWithoutUserInput[]
    createMany?: UserTaskCreateManyUserInputEnvelope
    connect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
  }

  export type UserHeroCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHeroCreateWithoutUserInput, UserHeroUncheckedCreateWithoutUserInput> | UserHeroCreateWithoutUserInput[] | UserHeroUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHeroCreateOrConnectWithoutUserInput | UserHeroCreateOrConnectWithoutUserInput[]
    createMany?: UserHeroCreateManyUserInputEnvelope
    connect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input> | BattleCreateWithoutPlayer1Input[] | BattleUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1Input | BattleCreateOrConnectWithoutPlayer1Input[]
    createMany?: BattleCreateManyPlayer1InputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input> | BattleCreateWithoutPlayer2Input[] | BattleUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2Input | BattleCreateOrConnectWithoutPlayer2Input[]
    createMany?: BattleCreateManyPlayer2InputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutWinnerInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type UserProductCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput> | UserProductCreateWithoutUserInput[] | UserProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutUserInput | UserProductCreateOrConnectWithoutUserInput[]
    createMany?: UserProductCreateManyUserInputEnvelope
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<FriendCreateWithoutInviterInput, FriendUncheckedCreateWithoutInviterInput> | FriendCreateWithoutInviterInput[] | FriendUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutInviterInput | FriendCreateOrConnectWithoutInviterInput[]
    createMany?: FriendCreateManyInviterInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput
    connect?: FriendWhereUniqueInput
  }

  export type MiningUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MiningCreateWithoutUserInput, MiningUncheckedCreateWithoutUserInput> | MiningCreateWithoutUserInput[] | MiningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MiningCreateOrConnectWithoutUserInput | MiningCreateOrConnectWithoutUserInput[]
    createMany?: MiningCreateManyUserInputEnvelope
    connect?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
  }

  export type UserTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTaskCreateWithoutUserInput, UserTaskUncheckedCreateWithoutUserInput> | UserTaskCreateWithoutUserInput[] | UserTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskCreateOrConnectWithoutUserInput | UserTaskCreateOrConnectWithoutUserInput[]
    createMany?: UserTaskCreateManyUserInputEnvelope
    connect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
  }

  export type UserHeroUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHeroCreateWithoutUserInput, UserHeroUncheckedCreateWithoutUserInput> | UserHeroCreateWithoutUserInput[] | UserHeroUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHeroCreateOrConnectWithoutUserInput | UserHeroCreateOrConnectWithoutUserInput[]
    createMany?: UserHeroCreateManyUserInputEnvelope
    connect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input> | BattleCreateWithoutPlayer1Input[] | BattleUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1Input | BattleCreateOrConnectWithoutPlayer1Input[]
    createMany?: BattleCreateManyPlayer1InputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input> | BattleCreateWithoutPlayer2Input[] | BattleUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2Input | BattleCreateOrConnectWithoutPlayer2Input[]
    createMany?: BattleCreateManyPlayer2InputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type UserProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput> | UserProductCreateWithoutUserInput[] | UserProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutUserInput | UserProductCreateOrConnectWithoutUserInput[]
    createMany?: UserProductCreateManyUserInputEnvelope
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FriendUpdateManyWithoutInviterNestedInput = {
    create?: XOR<FriendCreateWithoutInviterInput, FriendUncheckedCreateWithoutInviterInput> | FriendCreateWithoutInviterInput[] | FriendUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutInviterInput | FriendCreateOrConnectWithoutInviterInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutInviterInput | FriendUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: FriendCreateManyInviterInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutInviterInput | FriendUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutInviterInput | FriendUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUpdateOneWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput
    upsert?: FriendUpsertWithoutUserInput
    disconnect?: FriendWhereInput | boolean
    delete?: FriendWhereInput | boolean
    connect?: FriendWhereUniqueInput
    update?: XOR<XOR<FriendUpdateToOneWithWhereWithoutUserInput, FriendUpdateWithoutUserInput>, FriendUncheckedUpdateWithoutUserInput>
  }

  export type MiningUpdateManyWithoutUserNestedInput = {
    create?: XOR<MiningCreateWithoutUserInput, MiningUncheckedCreateWithoutUserInput> | MiningCreateWithoutUserInput[] | MiningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MiningCreateOrConnectWithoutUserInput | MiningCreateOrConnectWithoutUserInput[]
    upsert?: MiningUpsertWithWhereUniqueWithoutUserInput | MiningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MiningCreateManyUserInputEnvelope
    set?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
    disconnect?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
    delete?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
    connect?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
    update?: MiningUpdateWithWhereUniqueWithoutUserInput | MiningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MiningUpdateManyWithWhereWithoutUserInput | MiningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MiningScalarWhereInput | MiningScalarWhereInput[]
  }

  export type UserTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTaskCreateWithoutUserInput, UserTaskUncheckedCreateWithoutUserInput> | UserTaskCreateWithoutUserInput[] | UserTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskCreateOrConnectWithoutUserInput | UserTaskCreateOrConnectWithoutUserInput[]
    upsert?: UserTaskUpsertWithWhereUniqueWithoutUserInput | UserTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTaskCreateManyUserInputEnvelope
    set?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    disconnect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    delete?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    connect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    update?: UserTaskUpdateWithWhereUniqueWithoutUserInput | UserTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTaskUpdateManyWithWhereWithoutUserInput | UserTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTaskScalarWhereInput | UserTaskScalarWhereInput[]
  }

  export type UserHeroUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHeroCreateWithoutUserInput, UserHeroUncheckedCreateWithoutUserInput> | UserHeroCreateWithoutUserInput[] | UserHeroUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHeroCreateOrConnectWithoutUserInput | UserHeroCreateOrConnectWithoutUserInput[]
    upsert?: UserHeroUpsertWithWhereUniqueWithoutUserInput | UserHeroUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHeroCreateManyUserInputEnvelope
    set?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    disconnect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    delete?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    connect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    update?: UserHeroUpdateWithWhereUniqueWithoutUserInput | UserHeroUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHeroUpdateManyWithWhereWithoutUserInput | UserHeroUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHeroScalarWhereInput | UserHeroScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input> | BattleCreateWithoutPlayer1Input[] | BattleUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1Input | BattleCreateOrConnectWithoutPlayer1Input[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer1Input | BattleUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: BattleCreateManyPlayer1InputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer1Input | BattleUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer1Input | BattleUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input> | BattleCreateWithoutPlayer2Input[] | BattleUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2Input | BattleCreateOrConnectWithoutPlayer2Input[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer2Input | BattleUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: BattleCreateManyPlayer2InputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer2Input | BattleUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer2Input | BattleUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutWinnerInput | BattleUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutWinnerInput | BattleUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutWinnerInput | BattleUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type UserProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput> | UserProductCreateWithoutUserInput[] | UserProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutUserInput | UserProductCreateOrConnectWithoutUserInput[]
    upsert?: UserProductUpsertWithWhereUniqueWithoutUserInput | UserProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProductCreateManyUserInputEnvelope
    set?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    disconnect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    delete?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    update?: UserProductUpdateWithWhereUniqueWithoutUserInput | UserProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProductUpdateManyWithWhereWithoutUserInput | UserProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<FriendCreateWithoutInviterInput, FriendUncheckedCreateWithoutInviterInput> | FriendCreateWithoutInviterInput[] | FriendUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutInviterInput | FriendCreateOrConnectWithoutInviterInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutInviterInput | FriendUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: FriendCreateManyInviterInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutInviterInput | FriendUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutInviterInput | FriendUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput
    upsert?: FriendUpsertWithoutUserInput
    disconnect?: FriendWhereInput | boolean
    delete?: FriendWhereInput | boolean
    connect?: FriendWhereUniqueInput
    update?: XOR<XOR<FriendUpdateToOneWithWhereWithoutUserInput, FriendUpdateWithoutUserInput>, FriendUncheckedUpdateWithoutUserInput>
  }

  export type MiningUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MiningCreateWithoutUserInput, MiningUncheckedCreateWithoutUserInput> | MiningCreateWithoutUserInput[] | MiningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MiningCreateOrConnectWithoutUserInput | MiningCreateOrConnectWithoutUserInput[]
    upsert?: MiningUpsertWithWhereUniqueWithoutUserInput | MiningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MiningCreateManyUserInputEnvelope
    set?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
    disconnect?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
    delete?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
    connect?: MiningWhereUniqueInput | MiningWhereUniqueInput[]
    update?: MiningUpdateWithWhereUniqueWithoutUserInput | MiningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MiningUpdateManyWithWhereWithoutUserInput | MiningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MiningScalarWhereInput | MiningScalarWhereInput[]
  }

  export type UserTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTaskCreateWithoutUserInput, UserTaskUncheckedCreateWithoutUserInput> | UserTaskCreateWithoutUserInput[] | UserTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskCreateOrConnectWithoutUserInput | UserTaskCreateOrConnectWithoutUserInput[]
    upsert?: UserTaskUpsertWithWhereUniqueWithoutUserInput | UserTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTaskCreateManyUserInputEnvelope
    set?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    disconnect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    delete?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    connect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    update?: UserTaskUpdateWithWhereUniqueWithoutUserInput | UserTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTaskUpdateManyWithWhereWithoutUserInput | UserTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTaskScalarWhereInput | UserTaskScalarWhereInput[]
  }

  export type UserHeroUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHeroCreateWithoutUserInput, UserHeroUncheckedCreateWithoutUserInput> | UserHeroCreateWithoutUserInput[] | UserHeroUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHeroCreateOrConnectWithoutUserInput | UserHeroCreateOrConnectWithoutUserInput[]
    upsert?: UserHeroUpsertWithWhereUniqueWithoutUserInput | UserHeroUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHeroCreateManyUserInputEnvelope
    set?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    disconnect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    delete?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    connect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    update?: UserHeroUpdateWithWhereUniqueWithoutUserInput | UserHeroUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHeroUpdateManyWithWhereWithoutUserInput | UserHeroUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHeroScalarWhereInput | UserHeroScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input> | BattleCreateWithoutPlayer1Input[] | BattleUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1Input | BattleCreateOrConnectWithoutPlayer1Input[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer1Input | BattleUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: BattleCreateManyPlayer1InputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer1Input | BattleUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer1Input | BattleUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input> | BattleCreateWithoutPlayer2Input[] | BattleUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2Input | BattleCreateOrConnectWithoutPlayer2Input[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer2Input | BattleUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: BattleCreateManyPlayer2InputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer2Input | BattleUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer2Input | BattleUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutWinnerInput | BattleUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutWinnerInput | BattleUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutWinnerInput | BattleUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type UserProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput> | UserProductCreateWithoutUserInput[] | UserProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutUserInput | UserProductCreateOrConnectWithoutUserInput[]
    upsert?: UserProductUpsertWithWhereUniqueWithoutUserInput | UserProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProductCreateManyUserInputEnvelope
    set?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    disconnect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    delete?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    update?: UserProductUpdateWithWhereUniqueWithoutUserInput | UserProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProductUpdateManyWithWhereWithoutUserInput | UserProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvitedUsersInput = {
    create?: XOR<UserCreateWithoutInvitedUsersInput, UserUncheckedCreateWithoutInvitedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendInput = {
    create?: XOR<UserCreateWithoutFriendInput, UserUncheckedCreateWithoutFriendInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInvitedUsersNestedInput = {
    create?: XOR<UserCreateWithoutInvitedUsersInput, UserUncheckedCreateWithoutInvitedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitedUsersInput
    upsert?: UserUpsertWithoutInvitedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitedUsersInput, UserUpdateWithoutInvitedUsersInput>, UserUncheckedUpdateWithoutInvitedUsersInput>
  }

  export type UserUpdateOneRequiredWithoutFriendNestedInput = {
    create?: XOR<UserCreateWithoutFriendInput, UserUncheckedCreateWithoutFriendInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendInput
    upsert?: UserUpsertWithoutFriendInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendInput, UserUpdateWithoutFriendInput>, UserUncheckedUpdateWithoutFriendInput>
  }

  export type UserCreateNestedOneWithoutMiningsInput = {
    create?: XOR<UserCreateWithoutMiningsInput, UserUncheckedCreateWithoutMiningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMiningsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMiningsNestedInput = {
    create?: XOR<UserCreateWithoutMiningsInput, UserUncheckedCreateWithoutMiningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMiningsInput
    upsert?: UserUpsertWithoutMiningsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMiningsInput, UserUpdateWithoutMiningsInput>, UserUncheckedUpdateWithoutMiningsInput>
  }

  export type UserTaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserTaskCreateWithoutTaskInput, UserTaskUncheckedCreateWithoutTaskInput> | UserTaskCreateWithoutTaskInput[] | UserTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskCreateOrConnectWithoutTaskInput | UserTaskCreateOrConnectWithoutTaskInput[]
    createMany?: UserTaskCreateManyTaskInputEnvelope
    connect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
  }

  export type UserTaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserTaskCreateWithoutTaskInput, UserTaskUncheckedCreateWithoutTaskInput> | UserTaskCreateWithoutTaskInput[] | UserTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskCreateOrConnectWithoutTaskInput | UserTaskCreateOrConnectWithoutTaskInput[]
    createMany?: UserTaskCreateManyTaskInputEnvelope
    connect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type UserTaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserTaskCreateWithoutTaskInput, UserTaskUncheckedCreateWithoutTaskInput> | UserTaskCreateWithoutTaskInput[] | UserTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskCreateOrConnectWithoutTaskInput | UserTaskCreateOrConnectWithoutTaskInput[]
    upsert?: UserTaskUpsertWithWhereUniqueWithoutTaskInput | UserTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserTaskCreateManyTaskInputEnvelope
    set?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    disconnect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    delete?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    connect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    update?: UserTaskUpdateWithWhereUniqueWithoutTaskInput | UserTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserTaskUpdateManyWithWhereWithoutTaskInput | UserTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserTaskScalarWhereInput | UserTaskScalarWhereInput[]
  }

  export type UserTaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserTaskCreateWithoutTaskInput, UserTaskUncheckedCreateWithoutTaskInput> | UserTaskCreateWithoutTaskInput[] | UserTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskCreateOrConnectWithoutTaskInput | UserTaskCreateOrConnectWithoutTaskInput[]
    upsert?: UserTaskUpsertWithWhereUniqueWithoutTaskInput | UserTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserTaskCreateManyTaskInputEnvelope
    set?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    disconnect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    delete?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    connect?: UserTaskWhereUniqueInput | UserTaskWhereUniqueInput[]
    update?: UserTaskUpdateWithWhereUniqueWithoutTaskInput | UserTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserTaskUpdateManyWithWhereWithoutTaskInput | UserTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserTaskScalarWhereInput | UserTaskScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutUserTasksInput = {
    create?: XOR<TaskCreateWithoutUserTasksInput, TaskUncheckedCreateWithoutUserTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUserTasksInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserTasksInput = {
    create?: XOR<UserCreateWithoutUserTasksInput, UserUncheckedCreateWithoutUserTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTasksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type TaskUpdateOneRequiredWithoutUserTasksNestedInput = {
    create?: XOR<TaskCreateWithoutUserTasksInput, TaskUncheckedCreateWithoutUserTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUserTasksInput
    upsert?: TaskUpsertWithoutUserTasksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutUserTasksInput, TaskUpdateWithoutUserTasksInput>, TaskUncheckedUpdateWithoutUserTasksInput>
  }

  export type UserUpdateOneRequiredWithoutUserTasksNestedInput = {
    create?: XOR<UserCreateWithoutUserTasksInput, UserUncheckedCreateWithoutUserTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTasksInput
    upsert?: UserUpsertWithoutUserTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTasksInput, UserUpdateWithoutUserTasksInput>, UserUncheckedUpdateWithoutUserTasksInput>
  }

  export type BattleCreateNestedManyWithoutPlayer1HeroInput = {
    create?: XOR<BattleCreateWithoutPlayer1HeroInput, BattleUncheckedCreateWithoutPlayer1HeroInput> | BattleCreateWithoutPlayer1HeroInput[] | BattleUncheckedCreateWithoutPlayer1HeroInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1HeroInput | BattleCreateOrConnectWithoutPlayer1HeroInput[]
    createMany?: BattleCreateManyPlayer1HeroInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutPlayer2HeroInput = {
    create?: XOR<BattleCreateWithoutPlayer2HeroInput, BattleUncheckedCreateWithoutPlayer2HeroInput> | BattleCreateWithoutPlayer2HeroInput[] | BattleUncheckedCreateWithoutPlayer2HeroInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2HeroInput | BattleCreateOrConnectWithoutPlayer2HeroInput[]
    createMany?: BattleCreateManyPlayer2HeroInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type UserHeroCreateNestedManyWithoutHeroInput = {
    create?: XOR<UserHeroCreateWithoutHeroInput, UserHeroUncheckedCreateWithoutHeroInput> | UserHeroCreateWithoutHeroInput[] | UserHeroUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: UserHeroCreateOrConnectWithoutHeroInput | UserHeroCreateOrConnectWithoutHeroInput[]
    createMany?: UserHeroCreateManyHeroInputEnvelope
    connect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutPlayer1HeroInput = {
    create?: XOR<BattleCreateWithoutPlayer1HeroInput, BattleUncheckedCreateWithoutPlayer1HeroInput> | BattleCreateWithoutPlayer1HeroInput[] | BattleUncheckedCreateWithoutPlayer1HeroInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1HeroInput | BattleCreateOrConnectWithoutPlayer1HeroInput[]
    createMany?: BattleCreateManyPlayer1HeroInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutPlayer2HeroInput = {
    create?: XOR<BattleCreateWithoutPlayer2HeroInput, BattleUncheckedCreateWithoutPlayer2HeroInput> | BattleCreateWithoutPlayer2HeroInput[] | BattleUncheckedCreateWithoutPlayer2HeroInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2HeroInput | BattleCreateOrConnectWithoutPlayer2HeroInput[]
    createMany?: BattleCreateManyPlayer2HeroInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type UserHeroUncheckedCreateNestedManyWithoutHeroInput = {
    create?: XOR<UserHeroCreateWithoutHeroInput, UserHeroUncheckedCreateWithoutHeroInput> | UserHeroCreateWithoutHeroInput[] | UserHeroUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: UserHeroCreateOrConnectWithoutHeroInput | UserHeroCreateOrConnectWithoutHeroInput[]
    createMany?: UserHeroCreateManyHeroInputEnvelope
    connect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
  }

  export type BattleUpdateManyWithoutPlayer1HeroNestedInput = {
    create?: XOR<BattleCreateWithoutPlayer1HeroInput, BattleUncheckedCreateWithoutPlayer1HeroInput> | BattleCreateWithoutPlayer1HeroInput[] | BattleUncheckedCreateWithoutPlayer1HeroInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1HeroInput | BattleCreateOrConnectWithoutPlayer1HeroInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer1HeroInput | BattleUpsertWithWhereUniqueWithoutPlayer1HeroInput[]
    createMany?: BattleCreateManyPlayer1HeroInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer1HeroInput | BattleUpdateWithWhereUniqueWithoutPlayer1HeroInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer1HeroInput | BattleUpdateManyWithWhereWithoutPlayer1HeroInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutPlayer2HeroNestedInput = {
    create?: XOR<BattleCreateWithoutPlayer2HeroInput, BattleUncheckedCreateWithoutPlayer2HeroInput> | BattleCreateWithoutPlayer2HeroInput[] | BattleUncheckedCreateWithoutPlayer2HeroInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2HeroInput | BattleCreateOrConnectWithoutPlayer2HeroInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer2HeroInput | BattleUpsertWithWhereUniqueWithoutPlayer2HeroInput[]
    createMany?: BattleCreateManyPlayer2HeroInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer2HeroInput | BattleUpdateWithWhereUniqueWithoutPlayer2HeroInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer2HeroInput | BattleUpdateManyWithWhereWithoutPlayer2HeroInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type UserHeroUpdateManyWithoutHeroNestedInput = {
    create?: XOR<UserHeroCreateWithoutHeroInput, UserHeroUncheckedCreateWithoutHeroInput> | UserHeroCreateWithoutHeroInput[] | UserHeroUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: UserHeroCreateOrConnectWithoutHeroInput | UserHeroCreateOrConnectWithoutHeroInput[]
    upsert?: UserHeroUpsertWithWhereUniqueWithoutHeroInput | UserHeroUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: UserHeroCreateManyHeroInputEnvelope
    set?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    disconnect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    delete?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    connect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    update?: UserHeroUpdateWithWhereUniqueWithoutHeroInput | UserHeroUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: UserHeroUpdateManyWithWhereWithoutHeroInput | UserHeroUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: UserHeroScalarWhereInput | UserHeroScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutPlayer1HeroNestedInput = {
    create?: XOR<BattleCreateWithoutPlayer1HeroInput, BattleUncheckedCreateWithoutPlayer1HeroInput> | BattleCreateWithoutPlayer1HeroInput[] | BattleUncheckedCreateWithoutPlayer1HeroInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1HeroInput | BattleCreateOrConnectWithoutPlayer1HeroInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer1HeroInput | BattleUpsertWithWhereUniqueWithoutPlayer1HeroInput[]
    createMany?: BattleCreateManyPlayer1HeroInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer1HeroInput | BattleUpdateWithWhereUniqueWithoutPlayer1HeroInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer1HeroInput | BattleUpdateManyWithWhereWithoutPlayer1HeroInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutPlayer2HeroNestedInput = {
    create?: XOR<BattleCreateWithoutPlayer2HeroInput, BattleUncheckedCreateWithoutPlayer2HeroInput> | BattleCreateWithoutPlayer2HeroInput[] | BattleUncheckedCreateWithoutPlayer2HeroInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2HeroInput | BattleCreateOrConnectWithoutPlayer2HeroInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer2HeroInput | BattleUpsertWithWhereUniqueWithoutPlayer2HeroInput[]
    createMany?: BattleCreateManyPlayer2HeroInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer2HeroInput | BattleUpdateWithWhereUniqueWithoutPlayer2HeroInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer2HeroInput | BattleUpdateManyWithWhereWithoutPlayer2HeroInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type UserHeroUncheckedUpdateManyWithoutHeroNestedInput = {
    create?: XOR<UserHeroCreateWithoutHeroInput, UserHeroUncheckedCreateWithoutHeroInput> | UserHeroCreateWithoutHeroInput[] | UserHeroUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: UserHeroCreateOrConnectWithoutHeroInput | UserHeroCreateOrConnectWithoutHeroInput[]
    upsert?: UserHeroUpsertWithWhereUniqueWithoutHeroInput | UserHeroUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: UserHeroCreateManyHeroInputEnvelope
    set?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    disconnect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    delete?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    connect?: UserHeroWhereUniqueInput | UserHeroWhereUniqueInput[]
    update?: UserHeroUpdateWithWhereUniqueWithoutHeroInput | UserHeroUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: UserHeroUpdateManyWithWhereWithoutHeroInput | UserHeroUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: UserHeroScalarWhereInput | UserHeroScalarWhereInput[]
  }

  export type HeroCreateNestedOneWithoutUserHeroesInput = {
    create?: XOR<HeroCreateWithoutUserHeroesInput, HeroUncheckedCreateWithoutUserHeroesInput>
    connectOrCreate?: HeroCreateOrConnectWithoutUserHeroesInput
    connect?: HeroWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserHeroesInput = {
    create?: XOR<UserCreateWithoutUserHeroesInput, UserUncheckedCreateWithoutUserHeroesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHeroesInput
    connect?: UserWhereUniqueInput
  }

  export type HeroUpdateOneRequiredWithoutUserHeroesNestedInput = {
    create?: XOR<HeroCreateWithoutUserHeroesInput, HeroUncheckedCreateWithoutUserHeroesInput>
    connectOrCreate?: HeroCreateOrConnectWithoutUserHeroesInput
    upsert?: HeroUpsertWithoutUserHeroesInput
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutUserHeroesInput, HeroUpdateWithoutUserHeroesInput>, HeroUncheckedUpdateWithoutUserHeroesInput>
  }

  export type UserUpdateOneRequiredWithoutUserHeroesNestedInput = {
    create?: XOR<UserCreateWithoutUserHeroesInput, UserUncheckedCreateWithoutUserHeroesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHeroesInput
    upsert?: UserUpsertWithoutUserHeroesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserHeroesInput, UserUpdateWithoutUserHeroesInput>, UserUncheckedUpdateWithoutUserHeroesInput>
  }

  export type UserCreateNestedOneWithoutWonBattlesInput = {
    create?: XOR<UserCreateWithoutWonBattlesInput, UserUncheckedCreateWithoutWonBattlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonBattlesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBattlesAsPlayer1Input = {
    create?: XOR<UserCreateWithoutBattlesAsPlayer1Input, UserUncheckedCreateWithoutBattlesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayer1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBattlesAsPlayer2Input = {
    create?: XOR<UserCreateWithoutBattlesAsPlayer2Input, UserUncheckedCreateWithoutBattlesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayer2Input
    connect?: UserWhereUniqueInput
  }

  export type HeroCreateNestedOneWithoutBattlesAsPlayer1Input = {
    create?: XOR<HeroCreateWithoutBattlesAsPlayer1Input, HeroUncheckedCreateWithoutBattlesAsPlayer1Input>
    connectOrCreate?: HeroCreateOrConnectWithoutBattlesAsPlayer1Input
    connect?: HeroWhereUniqueInput
  }

  export type HeroCreateNestedOneWithoutBattlesAsPlayer2Input = {
    create?: XOR<HeroCreateWithoutBattlesAsPlayer2Input, HeroUncheckedCreateWithoutBattlesAsPlayer2Input>
    connectOrCreate?: HeroCreateOrConnectWithoutBattlesAsPlayer2Input
    connect?: HeroWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBattleStatusFieldUpdateOperationsInput = {
    set?: $Enums.BattleStatus
  }

  export type UserUpdateOneWithoutWonBattlesNestedInput = {
    create?: XOR<UserCreateWithoutWonBattlesInput, UserUncheckedCreateWithoutWonBattlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonBattlesInput
    upsert?: UserUpsertWithoutWonBattlesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWonBattlesInput, UserUpdateWithoutWonBattlesInput>, UserUncheckedUpdateWithoutWonBattlesInput>
  }

  export type UserUpdateOneWithoutBattlesAsPlayer1NestedInput = {
    create?: XOR<UserCreateWithoutBattlesAsPlayer1Input, UserUncheckedCreateWithoutBattlesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayer1Input
    upsert?: UserUpsertWithoutBattlesAsPlayer1Input
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBattlesAsPlayer1Input, UserUpdateWithoutBattlesAsPlayer1Input>, UserUncheckedUpdateWithoutBattlesAsPlayer1Input>
  }

  export type UserUpdateOneWithoutBattlesAsPlayer2NestedInput = {
    create?: XOR<UserCreateWithoutBattlesAsPlayer2Input, UserUncheckedCreateWithoutBattlesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayer2Input
    upsert?: UserUpsertWithoutBattlesAsPlayer2Input
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBattlesAsPlayer2Input, UserUpdateWithoutBattlesAsPlayer2Input>, UserUncheckedUpdateWithoutBattlesAsPlayer2Input>
  }

  export type HeroUpdateOneWithoutBattlesAsPlayer1NestedInput = {
    create?: XOR<HeroCreateWithoutBattlesAsPlayer1Input, HeroUncheckedCreateWithoutBattlesAsPlayer1Input>
    connectOrCreate?: HeroCreateOrConnectWithoutBattlesAsPlayer1Input
    upsert?: HeroUpsertWithoutBattlesAsPlayer1Input
    disconnect?: HeroWhereInput | boolean
    delete?: HeroWhereInput | boolean
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutBattlesAsPlayer1Input, HeroUpdateWithoutBattlesAsPlayer1Input>, HeroUncheckedUpdateWithoutBattlesAsPlayer1Input>
  }

  export type HeroUpdateOneWithoutBattlesAsPlayer2NestedInput = {
    create?: XOR<HeroCreateWithoutBattlesAsPlayer2Input, HeroUncheckedCreateWithoutBattlesAsPlayer2Input>
    connectOrCreate?: HeroCreateOrConnectWithoutBattlesAsPlayer2Input
    upsert?: HeroUpsertWithoutBattlesAsPlayer2Input
    disconnect?: HeroWhereInput | boolean
    delete?: HeroWhereInput | boolean
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutBattlesAsPlayer2Input, HeroUpdateWithoutBattlesAsPlayer2Input>, HeroUncheckedUpdateWithoutBattlesAsPlayer2Input>
  }

  export type UserProductCreateNestedManyWithoutProductInput = {
    create?: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput> | UserProductCreateWithoutProductInput[] | UserProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutProductInput | UserProductCreateOrConnectWithoutProductInput[]
    createMany?: UserProductCreateManyProductInputEnvelope
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
  }

  export type UserProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput> | UserProductCreateWithoutProductInput[] | UserProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutProductInput | UserProductCreateOrConnectWithoutProductInput[]
    createMany?: UserProductCreateManyProductInputEnvelope
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
  }

  export type EnumPriceTypeFieldUpdateOperationsInput = {
    set?: $Enums.PriceType
  }

  export type EnumProductTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductType
  }

  export type UserProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput> | UserProductCreateWithoutProductInput[] | UserProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutProductInput | UserProductCreateOrConnectWithoutProductInput[]
    upsert?: UserProductUpsertWithWhereUniqueWithoutProductInput | UserProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserProductCreateManyProductInputEnvelope
    set?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    disconnect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    delete?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    update?: UserProductUpdateWithWhereUniqueWithoutProductInput | UserProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserProductUpdateManyWithWhereWithoutProductInput | UserProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
  }

  export type UserProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput> | UserProductCreateWithoutProductInput[] | UserProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutProductInput | UserProductCreateOrConnectWithoutProductInput[]
    upsert?: UserProductUpsertWithWhereUniqueWithoutProductInput | UserProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserProductCreateManyProductInputEnvelope
    set?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    disconnect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    delete?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    update?: UserProductUpdateWithWhereUniqueWithoutProductInput | UserProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserProductUpdateManyWithWhereWithoutProductInput | UserProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserProductsInput = {
    create?: XOR<UserCreateWithoutUserProductsInput, UserUncheckedCreateWithoutUserProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProductsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutUserProductsInput = {
    create?: XOR<ProductCreateWithoutUserProductsInput, ProductUncheckedCreateWithoutUserProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserProductsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserProductsNestedInput = {
    create?: XOR<UserCreateWithoutUserProductsInput, UserUncheckedCreateWithoutUserProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProductsInput
    upsert?: UserUpsertWithoutUserProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProductsInput, UserUpdateWithoutUserProductsInput>, UserUncheckedUpdateWithoutUserProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutUserProductsNestedInput = {
    create?: XOR<ProductCreateWithoutUserProductsInput, ProductUncheckedCreateWithoutUserProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserProductsInput
    upsert?: ProductUpsertWithoutUserProductsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUserProductsInput, ProductUpdateWithoutUserProductsInput>, ProductUncheckedUpdateWithoutUserProductsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumBattleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BattleStatus | EnumBattleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBattleStatusFilter<$PrismaModel> | $Enums.BattleStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBattleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BattleStatus | EnumBattleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BattleStatus[] | ListEnumBattleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBattleStatusWithAggregatesFilter<$PrismaModel> | $Enums.BattleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBattleStatusFilter<$PrismaModel>
    _max?: NestedEnumBattleStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type NestedEnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type NestedEnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type FriendCreateWithoutInviterInput = {
    earned?: number
    createdOn?: Date | string
    user: UserCreateNestedOneWithoutFriendInput
  }

  export type FriendUncheckedCreateWithoutInviterInput = {
    id?: number
    userId: number
    earned?: number
    createdOn?: Date | string
  }

  export type FriendCreateOrConnectWithoutInviterInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutInviterInput, FriendUncheckedCreateWithoutInviterInput>
  }

  export type FriendCreateManyInviterInputEnvelope = {
    data: FriendCreateManyInviterInput | FriendCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutUserInput = {
    earned?: number
    createdOn?: Date | string
    inviter: UserCreateNestedOneWithoutInvitedUsersInput
  }

  export type FriendUncheckedCreateWithoutUserInput = {
    id?: number
    inviterId: number
    earned?: number
    createdOn?: Date | string
  }

  export type FriendCreateOrConnectWithoutUserInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type MiningCreateWithoutUserInput = {
    amount?: number
    startedAt?: Date | string
    expiresAt: Date | string
    finishedAt?: Date | string | null
  }

  export type MiningUncheckedCreateWithoutUserInput = {
    id?: number
    amount?: number
    startedAt?: Date | string
    expiresAt: Date | string
    finishedAt?: Date | string | null
  }

  export type MiningCreateOrConnectWithoutUserInput = {
    where: MiningWhereUniqueInput
    create: XOR<MiningCreateWithoutUserInput, MiningUncheckedCreateWithoutUserInput>
  }

  export type MiningCreateManyUserInputEnvelope = {
    data: MiningCreateManyUserInput | MiningCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTaskCreateWithoutUserInput = {
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutUserTasksInput
  }

  export type UserTaskUncheckedCreateWithoutUserInput = {
    id?: number
    taskId: number
    status?: $Enums.TaskStatus
    createdAt?: Date | string
  }

  export type UserTaskCreateOrConnectWithoutUserInput = {
    where: UserTaskWhereUniqueInput
    create: XOR<UserTaskCreateWithoutUserInput, UserTaskUncheckedCreateWithoutUserInput>
  }

  export type UserTaskCreateManyUserInputEnvelope = {
    data: UserTaskCreateManyUserInput | UserTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserHeroCreateWithoutUserInput = {
    createdOn?: Date | string
    hero: HeroCreateNestedOneWithoutUserHeroesInput
  }

  export type UserHeroUncheckedCreateWithoutUserInput = {
    id?: number
    heroId: number
    createdOn?: Date | string
  }

  export type UserHeroCreateOrConnectWithoutUserInput = {
    where: UserHeroWhereUniqueInput
    create: XOR<UserHeroCreateWithoutUserInput, UserHeroUncheckedCreateWithoutUserInput>
  }

  export type UserHeroCreateManyUserInputEnvelope = {
    data: UserHeroCreateManyUserInput | UserHeroCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutPlayer1Input = {
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    player1Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer1Input
    player2Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutPlayer1Input = {
    id?: number
    winnerId?: number | null
    player2Id?: number | null
    player1HeroId?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleCreateOrConnectWithoutPlayer1Input = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input>
  }

  export type BattleCreateManyPlayer1InputEnvelope = {
    data: BattleCreateManyPlayer1Input | BattleCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutPlayer2Input = {
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1?: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player1Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer1Input
    player2Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutPlayer2Input = {
    id?: number
    winnerId?: number | null
    player1Id?: number | null
    player1HeroId?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleCreateOrConnectWithoutPlayer2Input = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input>
  }

  export type BattleCreateManyPlayer2InputEnvelope = {
    data: BattleCreateManyPlayer2Input | BattleCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutWinnerInput = {
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
    player1?: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    player1Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer1Input
    player2Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutWinnerInput = {
    id?: number
    player1Id?: number | null
    player2Id?: number | null
    player1HeroId?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleCreateOrConnectWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput>
  }

  export type BattleCreateManyWinnerInputEnvelope = {
    data: BattleCreateManyWinnerInput | BattleCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type UserProductCreateWithoutUserInput = {
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutUserProductsInput
  }

  export type UserProductUncheckedCreateWithoutUserInput = {
    id?: number
    productId: number
    createdAt?: Date | string
  }

  export type UserProductCreateOrConnectWithoutUserInput = {
    where: UserProductWhereUniqueInput
    create: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput>
  }

  export type UserProductCreateManyUserInputEnvelope = {
    data: UserProductCreateManyUserInput | UserProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendUpsertWithWhereUniqueWithoutInviterInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutInviterInput, FriendUncheckedUpdateWithoutInviterInput>
    create: XOR<FriendCreateWithoutInviterInput, FriendUncheckedCreateWithoutInviterInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutInviterInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutInviterInput, FriendUncheckedUpdateWithoutInviterInput>
  }

  export type FriendUpdateManyWithWhereWithoutInviterInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutInviterInput>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    id?: IntFilter<"Friend"> | number
    inviterId?: IntFilter<"Friend"> | number
    userId?: IntFilter<"Friend"> | number
    earned?: FloatFilter<"Friend"> | number
    createdOn?: DateTimeFilter<"Friend"> | Date | string
  }

  export type FriendUpsertWithoutUserInput = {
    update: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
    where?: FriendWhereInput
  }

  export type FriendUpdateToOneWithWhereWithoutUserInput = {
    where?: FriendWhereInput
    data: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
  }

  export type FriendUpdateWithoutUserInput = {
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutInvitedUsersNestedInput
  }

  export type FriendUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiningUpsertWithWhereUniqueWithoutUserInput = {
    where: MiningWhereUniqueInput
    update: XOR<MiningUpdateWithoutUserInput, MiningUncheckedUpdateWithoutUserInput>
    create: XOR<MiningCreateWithoutUserInput, MiningUncheckedCreateWithoutUserInput>
  }

  export type MiningUpdateWithWhereUniqueWithoutUserInput = {
    where: MiningWhereUniqueInput
    data: XOR<MiningUpdateWithoutUserInput, MiningUncheckedUpdateWithoutUserInput>
  }

  export type MiningUpdateManyWithWhereWithoutUserInput = {
    where: MiningScalarWhereInput
    data: XOR<MiningUpdateManyMutationInput, MiningUncheckedUpdateManyWithoutUserInput>
  }

  export type MiningScalarWhereInput = {
    AND?: MiningScalarWhereInput | MiningScalarWhereInput[]
    OR?: MiningScalarWhereInput[]
    NOT?: MiningScalarWhereInput | MiningScalarWhereInput[]
    id?: IntFilter<"Mining"> | number
    userId?: IntFilter<"Mining"> | number
    amount?: FloatFilter<"Mining"> | number
    startedAt?: DateTimeFilter<"Mining"> | Date | string
    expiresAt?: DateTimeFilter<"Mining"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Mining"> | Date | string | null
  }

  export type UserTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTaskWhereUniqueInput
    update: XOR<UserTaskUpdateWithoutUserInput, UserTaskUncheckedUpdateWithoutUserInput>
    create: XOR<UserTaskCreateWithoutUserInput, UserTaskUncheckedCreateWithoutUserInput>
  }

  export type UserTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTaskWhereUniqueInput
    data: XOR<UserTaskUpdateWithoutUserInput, UserTaskUncheckedUpdateWithoutUserInput>
  }

  export type UserTaskUpdateManyWithWhereWithoutUserInput = {
    where: UserTaskScalarWhereInput
    data: XOR<UserTaskUpdateManyMutationInput, UserTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTaskScalarWhereInput = {
    AND?: UserTaskScalarWhereInput | UserTaskScalarWhereInput[]
    OR?: UserTaskScalarWhereInput[]
    NOT?: UserTaskScalarWhereInput | UserTaskScalarWhereInput[]
    id?: IntFilter<"UserTask"> | number
    userId?: IntFilter<"UserTask"> | number
    taskId?: IntFilter<"UserTask"> | number
    status?: EnumTaskStatusFilter<"UserTask"> | $Enums.TaskStatus
    createdAt?: DateTimeFilter<"UserTask"> | Date | string
  }

  export type UserHeroUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHeroWhereUniqueInput
    update: XOR<UserHeroUpdateWithoutUserInput, UserHeroUncheckedUpdateWithoutUserInput>
    create: XOR<UserHeroCreateWithoutUserInput, UserHeroUncheckedCreateWithoutUserInput>
  }

  export type UserHeroUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHeroWhereUniqueInput
    data: XOR<UserHeroUpdateWithoutUserInput, UserHeroUncheckedUpdateWithoutUserInput>
  }

  export type UserHeroUpdateManyWithWhereWithoutUserInput = {
    where: UserHeroScalarWhereInput
    data: XOR<UserHeroUpdateManyMutationInput, UserHeroUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHeroScalarWhereInput = {
    AND?: UserHeroScalarWhereInput | UserHeroScalarWhereInput[]
    OR?: UserHeroScalarWhereInput[]
    NOT?: UserHeroScalarWhereInput | UserHeroScalarWhereInput[]
    id?: IntFilter<"UserHero"> | number
    heroId?: IntFilter<"UserHero"> | number
    userId?: IntFilter<"UserHero"> | number
    createdOn?: DateTimeFilter<"UserHero"> | Date | string
  }

  export type BattleUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutPlayer1Input, BattleUncheckedUpdateWithoutPlayer1Input>
    create: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input>
  }

  export type BattleUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutPlayer1Input, BattleUncheckedUpdateWithoutPlayer1Input>
  }

  export type BattleUpdateManyWithWhereWithoutPlayer1Input = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type BattleScalarWhereInput = {
    AND?: BattleScalarWhereInput | BattleScalarWhereInput[]
    OR?: BattleScalarWhereInput[]
    NOT?: BattleScalarWhereInput | BattleScalarWhereInput[]
    id?: IntFilter<"Battle"> | number
    winnerId?: IntNullableFilter<"Battle"> | number | null
    player1Id?: IntNullableFilter<"Battle"> | number | null
    player2Id?: IntNullableFilter<"Battle"> | number | null
    player1HeroId?: IntNullableFilter<"Battle"> | number | null
    player2HeroId?: IntNullableFilter<"Battle"> | number | null
    player1Health?: IntNullableFilter<"Battle"> | number | null
    player2Health?: IntNullableFilter<"Battle"> | number | null
    player1Attack?: IntNullableFilter<"Battle"> | number | null
    player2Attack?: IntNullableFilter<"Battle"> | number | null
    status?: EnumBattleStatusFilter<"Battle"> | $Enums.BattleStatus
    createdOn?: DateTimeFilter<"Battle"> | Date | string
  }

  export type BattleUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutPlayer2Input, BattleUncheckedUpdateWithoutPlayer2Input>
    create: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input>
  }

  export type BattleUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutPlayer2Input, BattleUncheckedUpdateWithoutPlayer2Input>
  }

  export type BattleUpdateManyWithWhereWithoutPlayer2Input = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type BattleUpsertWithWhereUniqueWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutWinnerInput, BattleUncheckedUpdateWithoutWinnerInput>
    create: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput>
  }

  export type BattleUpdateWithWhereUniqueWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutWinnerInput, BattleUncheckedUpdateWithoutWinnerInput>
  }

  export type BattleUpdateManyWithWhereWithoutWinnerInput = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutWinnerInput>
  }

  export type UserProductUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProductWhereUniqueInput
    update: XOR<UserProductUpdateWithoutUserInput, UserProductUncheckedUpdateWithoutUserInput>
    create: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput>
  }

  export type UserProductUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProductWhereUniqueInput
    data: XOR<UserProductUpdateWithoutUserInput, UserProductUncheckedUpdateWithoutUserInput>
  }

  export type UserProductUpdateManyWithWhereWithoutUserInput = {
    where: UserProductScalarWhereInput
    data: XOR<UserProductUpdateManyMutationInput, UserProductUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProductScalarWhereInput = {
    AND?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
    OR?: UserProductScalarWhereInput[]
    NOT?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
    id?: IntFilter<"UserProduct"> | number
    userId?: IntFilter<"UserProduct"> | number
    productId?: IntFilter<"UserProduct"> | number
    createdAt?: DateTimeFilter<"UserProduct"> | Date | string
  }

  export type UserCreateWithoutInvitedUsersInput = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    friend?: FriendCreateNestedOneWithoutUserInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitedUsersInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitedUsersInput, UserUncheckedCreateWithoutInvitedUsersInput>
  }

  export type UserCreateWithoutFriendInput = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendInput, UserUncheckedCreateWithoutFriendInput>
  }

  export type UserUpsertWithoutInvitedUsersInput = {
    update: XOR<UserUpdateWithoutInvitedUsersInput, UserUncheckedUpdateWithoutInvitedUsersInput>
    create: XOR<UserCreateWithoutInvitedUsersInput, UserUncheckedCreateWithoutInvitedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitedUsersInput, UserUncheckedUpdateWithoutInvitedUsersInput>
  }

  export type UserUpdateWithoutInvitedUsersInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    friend?: FriendUpdateOneWithoutUserNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFriendInput = {
    update: XOR<UserUpdateWithoutFriendInput, UserUncheckedUpdateWithoutFriendInput>
    create: XOR<UserCreateWithoutFriendInput, UserUncheckedCreateWithoutFriendInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendInput, UserUncheckedUpdateWithoutFriendInput>
  }

  export type UserUpdateWithoutFriendInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMiningsInput = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    friend?: FriendCreateNestedOneWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMiningsInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMiningsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMiningsInput, UserUncheckedCreateWithoutMiningsInput>
  }

  export type UserUpsertWithoutMiningsInput = {
    update: XOR<UserUpdateWithoutMiningsInput, UserUncheckedUpdateWithoutMiningsInput>
    create: XOR<UserCreateWithoutMiningsInput, UserUncheckedCreateWithoutMiningsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMiningsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMiningsInput, UserUncheckedUpdateWithoutMiningsInput>
  }

  export type UserUpdateWithoutMiningsInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    friend?: FriendUpdateOneWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMiningsInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserTaskCreateWithoutTaskInput = {
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserTasksInput
  }

  export type UserTaskUncheckedCreateWithoutTaskInput = {
    id?: number
    userId: number
    status?: $Enums.TaskStatus
    createdAt?: Date | string
  }

  export type UserTaskCreateOrConnectWithoutTaskInput = {
    where: UserTaskWhereUniqueInput
    create: XOR<UserTaskCreateWithoutTaskInput, UserTaskUncheckedCreateWithoutTaskInput>
  }

  export type UserTaskCreateManyTaskInputEnvelope = {
    data: UserTaskCreateManyTaskInput | UserTaskCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserTaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: UserTaskWhereUniqueInput
    update: XOR<UserTaskUpdateWithoutTaskInput, UserTaskUncheckedUpdateWithoutTaskInput>
    create: XOR<UserTaskCreateWithoutTaskInput, UserTaskUncheckedCreateWithoutTaskInput>
  }

  export type UserTaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: UserTaskWhereUniqueInput
    data: XOR<UserTaskUpdateWithoutTaskInput, UserTaskUncheckedUpdateWithoutTaskInput>
  }

  export type UserTaskUpdateManyWithWhereWithoutTaskInput = {
    where: UserTaskScalarWhereInput
    data: XOR<UserTaskUpdateManyMutationInput, UserTaskUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutUserTasksInput = {
    title: string
    reward: number
    imageUrl: string
    link?: string | null
    channelId?: string | null
    createdOn?: Date | string
    type?: $Enums.TaskType
  }

  export type TaskUncheckedCreateWithoutUserTasksInput = {
    id?: number
    title: string
    reward: number
    imageUrl: string
    link?: string | null
    channelId?: string | null
    createdOn?: Date | string
    type?: $Enums.TaskType
  }

  export type TaskCreateOrConnectWithoutUserTasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserTasksInput, TaskUncheckedCreateWithoutUserTasksInput>
  }

  export type UserCreateWithoutUserTasksInput = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    friend?: FriendCreateNestedOneWithoutUserInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTasksInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTasksInput, UserUncheckedCreateWithoutUserTasksInput>
  }

  export type TaskUpsertWithoutUserTasksInput = {
    update: XOR<TaskUpdateWithoutUserTasksInput, TaskUncheckedUpdateWithoutUserTasksInput>
    create: XOR<TaskCreateWithoutUserTasksInput, TaskUncheckedCreateWithoutUserTasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutUserTasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutUserTasksInput, TaskUncheckedUpdateWithoutUserTasksInput>
  }

  export type TaskUpdateWithoutUserTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
  }

  export type TaskUncheckedUpdateWithoutUserTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
  }

  export type UserUpsertWithoutUserTasksInput = {
    update: XOR<UserUpdateWithoutUserTasksInput, UserUncheckedUpdateWithoutUserTasksInput>
    create: XOR<UserCreateWithoutUserTasksInput, UserUncheckedCreateWithoutUserTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTasksInput, UserUncheckedUpdateWithoutUserTasksInput>
  }

  export type UserUpdateWithoutUserTasksInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    friend?: FriendUpdateOneWithoutUserNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BattleCreateWithoutPlayer1HeroInput = {
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1?: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    player2Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutPlayer1HeroInput = {
    id?: number
    winnerId?: number | null
    player1Id?: number | null
    player2Id?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleCreateOrConnectWithoutPlayer1HeroInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutPlayer1HeroInput, BattleUncheckedCreateWithoutPlayer1HeroInput>
  }

  export type BattleCreateManyPlayer1HeroInputEnvelope = {
    data: BattleCreateManyPlayer1HeroInput | BattleCreateManyPlayer1HeroInput[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutPlayer2HeroInput = {
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1?: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    player1Hero?: HeroCreateNestedOneWithoutBattlesAsPlayer1Input
  }

  export type BattleUncheckedCreateWithoutPlayer2HeroInput = {
    id?: number
    winnerId?: number | null
    player1Id?: number | null
    player2Id?: number | null
    player1HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleCreateOrConnectWithoutPlayer2HeroInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutPlayer2HeroInput, BattleUncheckedCreateWithoutPlayer2HeroInput>
  }

  export type BattleCreateManyPlayer2HeroInputEnvelope = {
    data: BattleCreateManyPlayer2HeroInput | BattleCreateManyPlayer2HeroInput[]
    skipDuplicates?: boolean
  }

  export type UserHeroCreateWithoutHeroInput = {
    createdOn?: Date | string
    user: UserCreateNestedOneWithoutUserHeroesInput
  }

  export type UserHeroUncheckedCreateWithoutHeroInput = {
    id?: number
    userId: number
    createdOn?: Date | string
  }

  export type UserHeroCreateOrConnectWithoutHeroInput = {
    where: UserHeroWhereUniqueInput
    create: XOR<UserHeroCreateWithoutHeroInput, UserHeroUncheckedCreateWithoutHeroInput>
  }

  export type UserHeroCreateManyHeroInputEnvelope = {
    data: UserHeroCreateManyHeroInput | UserHeroCreateManyHeroInput[]
    skipDuplicates?: boolean
  }

  export type BattleUpsertWithWhereUniqueWithoutPlayer1HeroInput = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutPlayer1HeroInput, BattleUncheckedUpdateWithoutPlayer1HeroInput>
    create: XOR<BattleCreateWithoutPlayer1HeroInput, BattleUncheckedCreateWithoutPlayer1HeroInput>
  }

  export type BattleUpdateWithWhereUniqueWithoutPlayer1HeroInput = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutPlayer1HeroInput, BattleUncheckedUpdateWithoutPlayer1HeroInput>
  }

  export type BattleUpdateManyWithWhereWithoutPlayer1HeroInput = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutPlayer1HeroInput>
  }

  export type BattleUpsertWithWhereUniqueWithoutPlayer2HeroInput = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutPlayer2HeroInput, BattleUncheckedUpdateWithoutPlayer2HeroInput>
    create: XOR<BattleCreateWithoutPlayer2HeroInput, BattleUncheckedCreateWithoutPlayer2HeroInput>
  }

  export type BattleUpdateWithWhereUniqueWithoutPlayer2HeroInput = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutPlayer2HeroInput, BattleUncheckedUpdateWithoutPlayer2HeroInput>
  }

  export type BattleUpdateManyWithWhereWithoutPlayer2HeroInput = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutPlayer2HeroInput>
  }

  export type UserHeroUpsertWithWhereUniqueWithoutHeroInput = {
    where: UserHeroWhereUniqueInput
    update: XOR<UserHeroUpdateWithoutHeroInput, UserHeroUncheckedUpdateWithoutHeroInput>
    create: XOR<UserHeroCreateWithoutHeroInput, UserHeroUncheckedCreateWithoutHeroInput>
  }

  export type UserHeroUpdateWithWhereUniqueWithoutHeroInput = {
    where: UserHeroWhereUniqueInput
    data: XOR<UserHeroUpdateWithoutHeroInput, UserHeroUncheckedUpdateWithoutHeroInput>
  }

  export type UserHeroUpdateManyWithWhereWithoutHeroInput = {
    where: UserHeroScalarWhereInput
    data: XOR<UserHeroUpdateManyMutationInput, UserHeroUncheckedUpdateManyWithoutHeroInput>
  }

  export type HeroCreateWithoutUserHeroesInput = {
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1HeroInput
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2HeroInput
  }

  export type HeroUncheckedCreateWithoutUserHeroesInput = {
    id?: number
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1HeroInput
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2HeroInput
  }

  export type HeroCreateOrConnectWithoutUserHeroesInput = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutUserHeroesInput, HeroUncheckedCreateWithoutUserHeroesInput>
  }

  export type UserCreateWithoutUserHeroesInput = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    friend?: FriendCreateNestedOneWithoutUserInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserHeroesInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserHeroesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserHeroesInput, UserUncheckedCreateWithoutUserHeroesInput>
  }

  export type HeroUpsertWithoutUserHeroesInput = {
    update: XOR<HeroUpdateWithoutUserHeroesInput, HeroUncheckedUpdateWithoutUserHeroesInput>
    create: XOR<HeroCreateWithoutUserHeroesInput, HeroUncheckedCreateWithoutUserHeroesInput>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutUserHeroesInput = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutUserHeroesInput, HeroUncheckedUpdateWithoutUserHeroesInput>
  }

  export type HeroUpdateWithoutUserHeroesInput = {
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1HeroNestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2HeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutUserHeroesInput = {
    id?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1HeroNestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2HeroNestedInput
  }

  export type UserUpsertWithoutUserHeroesInput = {
    update: XOR<UserUpdateWithoutUserHeroesInput, UserUncheckedUpdateWithoutUserHeroesInput>
    create: XOR<UserCreateWithoutUserHeroesInput, UserUncheckedCreateWithoutUserHeroesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserHeroesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserHeroesInput, UserUncheckedUpdateWithoutUserHeroesInput>
  }

  export type UserUpdateWithoutUserHeroesInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    friend?: FriendUpdateOneWithoutUserNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserHeroesInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWonBattlesInput = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    friend?: FriendCreateNestedOneWithoutUserInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWonBattlesInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWonBattlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWonBattlesInput, UserUncheckedCreateWithoutWonBattlesInput>
  }

  export type UserCreateWithoutBattlesAsPlayer1Input = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    friend?: FriendCreateNestedOneWithoutUserInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBattlesAsPlayer1Input = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBattlesAsPlayer1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBattlesAsPlayer1Input, UserUncheckedCreateWithoutBattlesAsPlayer1Input>
  }

  export type UserCreateWithoutBattlesAsPlayer2Input = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    friend?: FriendCreateNestedOneWithoutUserInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBattlesAsPlayer2Input = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    userProducts?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBattlesAsPlayer2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBattlesAsPlayer2Input, UserUncheckedCreateWithoutBattlesAsPlayer2Input>
  }

  export type HeroCreateWithoutBattlesAsPlayer1Input = {
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2HeroInput
    userHeroes?: UserHeroCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutBattlesAsPlayer1Input = {
    id?: number
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2HeroInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutBattlesAsPlayer1Input = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutBattlesAsPlayer1Input, HeroUncheckedCreateWithoutBattlesAsPlayer1Input>
  }

  export type HeroCreateWithoutBattlesAsPlayer2Input = {
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1HeroInput
    userHeroes?: UserHeroCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutBattlesAsPlayer2Input = {
    id?: number
    health: number
    attack: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1HeroInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutBattlesAsPlayer2Input = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutBattlesAsPlayer2Input, HeroUncheckedCreateWithoutBattlesAsPlayer2Input>
  }

  export type UserUpsertWithoutWonBattlesInput = {
    update: XOR<UserUpdateWithoutWonBattlesInput, UserUncheckedUpdateWithoutWonBattlesInput>
    create: XOR<UserCreateWithoutWonBattlesInput, UserUncheckedCreateWithoutWonBattlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWonBattlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWonBattlesInput, UserUncheckedUpdateWithoutWonBattlesInput>
  }

  export type UserUpdateWithoutWonBattlesInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    friend?: FriendUpdateOneWithoutUserNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWonBattlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutBattlesAsPlayer1Input = {
    update: XOR<UserUpdateWithoutBattlesAsPlayer1Input, UserUncheckedUpdateWithoutBattlesAsPlayer1Input>
    create: XOR<UserCreateWithoutBattlesAsPlayer1Input, UserUncheckedCreateWithoutBattlesAsPlayer1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBattlesAsPlayer1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBattlesAsPlayer1Input, UserUncheckedUpdateWithoutBattlesAsPlayer1Input>
  }

  export type UserUpdateWithoutBattlesAsPlayer1Input = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    friend?: FriendUpdateOneWithoutUserNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBattlesAsPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutBattlesAsPlayer2Input = {
    update: XOR<UserUpdateWithoutBattlesAsPlayer2Input, UserUncheckedUpdateWithoutBattlesAsPlayer2Input>
    create: XOR<UserCreateWithoutBattlesAsPlayer2Input, UserUncheckedCreateWithoutBattlesAsPlayer2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBattlesAsPlayer2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBattlesAsPlayer2Input, UserUncheckedUpdateWithoutBattlesAsPlayer2Input>
  }

  export type UserUpdateWithoutBattlesAsPlayer2Input = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    friend?: FriendUpdateOneWithoutUserNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBattlesAsPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    userProducts?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HeroUpsertWithoutBattlesAsPlayer1Input = {
    update: XOR<HeroUpdateWithoutBattlesAsPlayer1Input, HeroUncheckedUpdateWithoutBattlesAsPlayer1Input>
    create: XOR<HeroCreateWithoutBattlesAsPlayer1Input, HeroUncheckedCreateWithoutBattlesAsPlayer1Input>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutBattlesAsPlayer1Input = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutBattlesAsPlayer1Input, HeroUncheckedUpdateWithoutBattlesAsPlayer1Input>
  }

  export type HeroUpdateWithoutBattlesAsPlayer1Input = {
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2HeroNestedInput
    userHeroes?: UserHeroUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutBattlesAsPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2HeroNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type HeroUpsertWithoutBattlesAsPlayer2Input = {
    update: XOR<HeroUpdateWithoutBattlesAsPlayer2Input, HeroUncheckedUpdateWithoutBattlesAsPlayer2Input>
    create: XOR<HeroCreateWithoutBattlesAsPlayer2Input, HeroUncheckedCreateWithoutBattlesAsPlayer2Input>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutBattlesAsPlayer2Input = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutBattlesAsPlayer2Input, HeroUncheckedUpdateWithoutBattlesAsPlayer2Input>
  }

  export type HeroUpdateWithoutBattlesAsPlayer2Input = {
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1HeroNestedInput
    userHeroes?: UserHeroUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutBattlesAsPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1HeroNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type UserProductCreateWithoutProductInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserProductsInput
  }

  export type UserProductUncheckedCreateWithoutProductInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type UserProductCreateOrConnectWithoutProductInput = {
    where: UserProductWhereUniqueInput
    create: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput>
  }

  export type UserProductCreateManyProductInputEnvelope = {
    data: UserProductCreateManyProductInput | UserProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserProductUpsertWithWhereUniqueWithoutProductInput = {
    where: UserProductWhereUniqueInput
    update: XOR<UserProductUpdateWithoutProductInput, UserProductUncheckedUpdateWithoutProductInput>
    create: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput>
  }

  export type UserProductUpdateWithWhereUniqueWithoutProductInput = {
    where: UserProductWhereUniqueInput
    data: XOR<UserProductUpdateWithoutProductInput, UserProductUncheckedUpdateWithoutProductInput>
  }

  export type UserProductUpdateManyWithWhereWithoutProductInput = {
    where: UserProductScalarWhereInput
    data: XOR<UserProductUpdateManyMutationInput, UserProductUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutUserProductsInput = {
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendCreateNestedManyWithoutInviterInput
    friend?: FriendCreateNestedOneWithoutUserInput
    minings?: MiningCreateNestedManyWithoutUserInput
    userTasks?: UserTaskCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutUserProductsInput = {
    id?: number
    photoUrl?: string | null
    telegramLanguage?: string
    telegramId: string
    username?: string | null
    firstName: string
    lastName?: string | null
    createdAt?: Date | string
    lastLoginAt?: Date | string
    balance?: number
    crystal?: number
    isPremium?: boolean
    walletAddress?: string | null
    streak?: number
    dailyAvaliable?: boolean
    miningTimeInSeconds?: number
    miningProfit?: number
    invitedUsers?: FriendUncheckedCreateNestedManyWithoutInviterInput
    friend?: FriendUncheckedCreateNestedOneWithoutUserInput
    minings?: MiningUncheckedCreateNestedManyWithoutUserInput
    userTasks?: UserTaskUncheckedCreateNestedManyWithoutUserInput
    userHeroes?: UserHeroUncheckedCreateNestedManyWithoutUserInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutUserProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProductsInput, UserUncheckedCreateWithoutUserProductsInput>
  }

  export type ProductCreateWithoutUserProductsInput = {
    name: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    heroId?: number | null
    health?: number | null
    attack?: number | null
    priceType?: $Enums.PriceType
    type?: $Enums.ProductType
  }

  export type ProductUncheckedCreateWithoutUserProductsInput = {
    id?: number
    name: string
    price: number
    imageUrl: string
    createdAt?: Date | string
    heroId?: number | null
    health?: number | null
    attack?: number | null
    priceType?: $Enums.PriceType
    type?: $Enums.ProductType
  }

  export type ProductCreateOrConnectWithoutUserProductsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserProductsInput, ProductUncheckedCreateWithoutUserProductsInput>
  }

  export type UserUpsertWithoutUserProductsInput = {
    update: XOR<UserUpdateWithoutUserProductsInput, UserUncheckedUpdateWithoutUserProductsInput>
    create: XOR<UserCreateWithoutUserProductsInput, UserUncheckedCreateWithoutUserProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProductsInput, UserUncheckedUpdateWithoutUserProductsInput>
  }

  export type UserUpdateWithoutUserProductsInput = {
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUpdateManyWithoutInviterNestedInput
    friend?: FriendUpdateOneWithoutUserNestedInput
    minings?: MiningUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLanguage?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: IntFieldUpdateOperationsInput | number
    crystal?: IntFieldUpdateOperationsInput | number
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    dailyAvaliable?: BoolFieldUpdateOperationsInput | boolean
    miningTimeInSeconds?: IntFieldUpdateOperationsInput | number
    miningProfit?: FloatFieldUpdateOperationsInput | number
    invitedUsers?: FriendUncheckedUpdateManyWithoutInviterNestedInput
    friend?: FriendUncheckedUpdateOneWithoutUserNestedInput
    minings?: MiningUncheckedUpdateManyWithoutUserNestedInput
    userTasks?: UserTaskUncheckedUpdateManyWithoutUserNestedInput
    userHeroes?: UserHeroUncheckedUpdateManyWithoutUserNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type ProductUpsertWithoutUserProductsInput = {
    update: XOR<ProductUpdateWithoutUserProductsInput, ProductUncheckedUpdateWithoutUserProductsInput>
    create: XOR<ProductCreateWithoutUserProductsInput, ProductUncheckedCreateWithoutUserProductsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUserProductsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUserProductsInput, ProductUncheckedUpdateWithoutUserProductsInput>
  }

  export type ProductUpdateWithoutUserProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroId?: NullableIntFieldUpdateOperationsInput | number | null
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
  }

  export type ProductUncheckedUpdateWithoutUserProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroId?: NullableIntFieldUpdateOperationsInput | number | null
    health?: NullableIntFieldUpdateOperationsInput | number | null
    attack?: NullableIntFieldUpdateOperationsInput | number | null
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
  }

  export type FriendCreateManyInviterInput = {
    id?: number
    userId: number
    earned?: number
    createdOn?: Date | string
  }

  export type MiningCreateManyUserInput = {
    id?: number
    amount?: number
    startedAt?: Date | string
    expiresAt: Date | string
    finishedAt?: Date | string | null
  }

  export type UserTaskCreateManyUserInput = {
    id?: number
    taskId: number
    status?: $Enums.TaskStatus
    createdAt?: Date | string
  }

  export type UserHeroCreateManyUserInput = {
    id?: number
    heroId: number
    createdOn?: Date | string
  }

  export type BattleCreateManyPlayer1Input = {
    id?: number
    winnerId?: number | null
    player2Id?: number | null
    player1HeroId?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleCreateManyPlayer2Input = {
    id?: number
    winnerId?: number | null
    player1Id?: number | null
    player1HeroId?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleCreateManyWinnerInput = {
    id?: number
    player1Id?: number | null
    player2Id?: number | null
    player1HeroId?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type UserProductCreateManyUserInput = {
    id?: number
    productId: number
    createdAt?: Date | string
  }

  export type FriendUpdateWithoutInviterInput = {
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendNestedInput
  }

  export type FriendUncheckedUpdateWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    earned?: FloatFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiningUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MiningUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MiningUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTaskUpdateWithoutUserInput = {
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutUserTasksNestedInput
  }

  export type UserTaskUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeroUpdateWithoutUserInput = {
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    hero?: HeroUpdateOneRequiredWithoutUserHeroesNestedInput
  }

  export type UserHeroUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeroUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUpdateWithoutPlayer1Input = {
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    player1Hero?: HeroUpdateOneWithoutBattlesAsPlayer1NestedInput
    player2Hero?: HeroUpdateOneWithoutBattlesAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUpdateWithoutPlayer2Input = {
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1?: UserUpdateOneWithoutBattlesAsPlayer1NestedInput
    player1Hero?: HeroUpdateOneWithoutBattlesAsPlayer1NestedInput
    player2Hero?: HeroUpdateOneWithoutBattlesAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUpdateWithoutWinnerInput = {
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    player1Hero?: HeroUpdateOneWithoutBattlesAsPlayer1NestedInput
    player2Hero?: HeroUpdateOneWithoutBattlesAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutUserProductsNestedInput
  }

  export type UserProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskCreateManyTaskInput = {
    id?: number
    userId: number
    status?: $Enums.TaskStatus
    createdAt?: Date | string
  }

  export type UserTaskUpdateWithoutTaskInput = {
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTasksNestedInput
  }

  export type UserTaskUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleCreateManyPlayer1HeroInput = {
    id?: number
    winnerId?: number | null
    player1Id?: number | null
    player2Id?: number | null
    player2HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type BattleCreateManyPlayer2HeroInput = {
    id?: number
    winnerId?: number | null
    player1Id?: number | null
    player2Id?: number | null
    player1HeroId?: number | null
    player1Health?: number | null
    player2Health?: number | null
    player1Attack?: number | null
    player2Attack?: number | null
    status?: $Enums.BattleStatus
    createdOn?: Date | string
  }

  export type UserHeroCreateManyHeroInput = {
    id?: number
    userId: number
    createdOn?: Date | string
  }

  export type BattleUpdateWithoutPlayer1HeroInput = {
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1?: UserUpdateOneWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    player2Hero?: HeroUpdateOneWithoutBattlesAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutPlayer1HeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutPlayer1HeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUpdateWithoutPlayer2HeroInput = {
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1?: UserUpdateOneWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    player1Hero?: HeroUpdateOneWithoutBattlesAsPlayer1NestedInput
  }

  export type BattleUncheckedUpdateWithoutPlayer2HeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutPlayer2HeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1HeroId?: NullableIntFieldUpdateOperationsInput | number | null
    player1Health?: NullableIntFieldUpdateOperationsInput | number | null
    player2Health?: NullableIntFieldUpdateOperationsInput | number | null
    player1Attack?: NullableIntFieldUpdateOperationsInput | number | null
    player2Attack?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBattleStatusFieldUpdateOperationsInput | $Enums.BattleStatus
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeroUpdateWithoutHeroInput = {
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserHeroesNestedInput
  }

  export type UserHeroUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHeroUncheckedUpdateManyWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductCreateManyProductInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type UserProductUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserProductsNestedInput
  }

  export type UserProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}