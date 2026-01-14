
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model SaveImages
 * 
 */
export type SaveImages = $Result.DefaultSelection<Prisma.$SaveImagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saveImages`: Exposes CRUD operations for the **SaveImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaveImages
    * const saveImages = await prisma.saveImages.findMany()
    * ```
    */
  get saveImages(): Prisma.SaveImagesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Users: 'Users',
    Images: 'Images',
    Comments: 'Comments',
    SaveImages: 'SaveImages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "images" | "comments" | "saveImages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      SaveImages: {
        payload: Prisma.$SaveImagesPayload<ExtArgs>
        fields: Prisma.SaveImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaveImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaveImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload>
          }
          findFirst: {
            args: Prisma.SaveImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaveImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload>
          }
          findMany: {
            args: Prisma.SaveImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload>[]
          }
          create: {
            args: Prisma.SaveImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload>
          }
          createMany: {
            args: Prisma.SaveImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SaveImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload>
          }
          update: {
            args: Prisma.SaveImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload>
          }
          deleteMany: {
            args: Prisma.SaveImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaveImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaveImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveImagesPayload>
          }
          aggregate: {
            args: Prisma.SaveImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaveImages>
          }
          groupBy: {
            args: Prisma.SaveImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaveImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaveImagesCountArgs<ExtArgs>
            result: $Utils.Optional<SaveImagesCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    users?: UsersOmit
    images?: ImagesOmit
    comments?: CommentsOmit
    saveImages?: SaveImagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Images: number
    Comments: number
    SaveImages: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Images?: boolean | UsersCountOutputTypeCountImagesArgs
    Comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    SaveImages?: boolean | UsersCountOutputTypeCountSaveImagesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSaveImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveImagesWhereInput
  }


  /**
   * Count Type ImagesCountOutputType
   */

  export type ImagesCountOutputType = {
    Comments: number
    SaveImages: number
  }

  export type ImagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | ImagesCountOutputTypeCountCommentsArgs
    SaveImages?: boolean | ImagesCountOutputTypeCountSaveImagesArgs
  }

  // Custom InputTypes
  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesCountOutputType
     */
    select?: ImagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeCountSaveImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveImagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    age: number | null
    avatar: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    age: number | null
    avatar: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    fullName: number
    age: number
    avatar: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    age?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    age?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    email: string
    password: string
    fullName: string | null
    age: number | null
    avatar: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    age?: boolean
    avatar?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Images?: boolean | Users$ImagesArgs<ExtArgs>
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    SaveImages?: boolean | Users$SaveImagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    age?: boolean
    avatar?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "password" | "fullName" | "age" | "avatar" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Images?: boolean | Users$ImagesArgs<ExtArgs>
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    SaveImages?: boolean | Users$SaveImagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Images: Prisma.$ImagesPayload<ExtArgs>[]
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      SaveImages: Prisma.$SaveImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password: string
      fullName: string | null
      age: number | null
      avatar: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Images<T extends Users$ImagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Comments<T extends Users$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SaveImages<T extends Users$SaveImagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$SaveImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly age: FieldRef<"Users", 'Int'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly isDeleted: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Images
   */
  export type Users$ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Users.Comments
   */
  export type Users$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.SaveImages
   */
  export type Users$SaveImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    where?: SaveImagesWhereInput
    orderBy?: SaveImagesOrderByWithRelationInput | SaveImagesOrderByWithRelationInput[]
    cursor?: SaveImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaveImagesScalarFieldEnum | SaveImagesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    image_id: number | null
    userId: number | null
  }

  export type ImagesSumAggregateOutputType = {
    image_id: number | null
    userId: number | null
  }

  export type ImagesMinAggregateOutputType = {
    image_id: number | null
    image_name: string | null
    image_url: string | null
    image_description: string | null
    userId: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesMaxAggregateOutputType = {
    image_id: number | null
    image_name: string | null
    image_url: string | null
    image_description: string | null
    userId: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesCountAggregateOutputType = {
    image_id: number
    image_name: number
    image_url: number
    image_description: number
    userId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    image_id?: true
    userId?: true
  }

  export type ImagesSumAggregateInputType = {
    image_id?: true
    userId?: true
  }

  export type ImagesMinAggregateInputType = {
    image_id?: true
    image_name?: true
    image_url?: true
    image_description?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesMaxAggregateInputType = {
    image_id?: true
    image_name?: true
    image_url?: true
    image_description?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesCountAggregateInputType = {
    image_id?: true
    image_name?: true
    image_url?: true
    image_description?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    image_id: number
    image_name: string
    image_url: string
    image_description: string | null
    userId: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    image_name?: boolean
    image_url?: boolean
    image_description?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Comments?: boolean | Images$CommentsArgs<ExtArgs>
    SaveImages?: boolean | Images$SaveImagesArgs<ExtArgs>
    _count?: boolean | ImagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>



  export type ImagesSelectScalar = {
    image_id?: boolean
    image_name?: boolean
    image_url?: boolean
    image_description?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"image_id" | "image_name" | "image_url" | "image_description" | "userId" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["images"]>
  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Comments?: boolean | Images$CommentsArgs<ExtArgs>
    SaveImages?: boolean | Images$SaveImagesArgs<ExtArgs>
    _count?: boolean | ImagesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      SaveImages: Prisma.$SaveImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      image_id: number
      image_name: string
      image_url: string
      image_description: string | null
      userId: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesFindUniqueArgs>(args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesFindFirstArgs>(args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const imagesWithImage_idOnly = await prisma.images.findMany({ select: { image_id: true } })
     * 
     */
    findMany<T extends ImagesFindManyArgs>(args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends ImagesCreateArgs>(args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesCreateManyArgs>(args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends ImagesDeleteArgs>(args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesUpdateArgs>(args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesDeleteManyArgs>(args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesUpdateManyArgs>(args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends ImagesUpsertArgs>(args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
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
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Comments<T extends Images$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Images$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SaveImages<T extends Images$SaveImagesArgs<ExtArgs> = {}>(args?: Subset<T, Images$SaveImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Images model
   */
  interface ImagesFieldRefs {
    readonly image_id: FieldRef<"Images", 'Int'>
    readonly image_name: FieldRef<"Images", 'String'>
    readonly image_url: FieldRef<"Images", 'String'>
    readonly image_description: FieldRef<"Images", 'String'>
    readonly userId: FieldRef<"Images", 'Int'>
    readonly isDeleted: FieldRef<"Images", 'Boolean'>
    readonly createdAt: FieldRef<"Images", 'DateTime'>
    readonly updatedAt: FieldRef<"Images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }

  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }

  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Images.Comments
   */
  export type Images$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Images.SaveImages
   */
  export type Images$SaveImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    where?: SaveImagesWhereInput
    orderBy?: SaveImagesOrderByWithRelationInput | SaveImagesOrderByWithRelationInput[]
    cursor?: SaveImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaveImagesScalarFieldEnum | SaveImagesScalarFieldEnum[]
  }

  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    comment_id: number | null
    userId: number | null
    imageId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    comment_id: number | null
    userId: number | null
    imageId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    comment_id: number | null
    content: string | null
    userId: number | null
    imageId: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    comment_id: number | null
    content: string | null
    userId: number | null
    imageId: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    comment_id: number
    content: number
    userId: number
    imageId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    comment_id?: true
    userId?: true
    imageId?: true
  }

  export type CommentsSumAggregateInputType = {
    comment_id?: true
    userId?: true
    imageId?: true
  }

  export type CommentsMinAggregateInputType = {
    comment_id?: true
    content?: true
    userId?: true
    imageId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    comment_id?: true
    content?: true
    userId?: true
    imageId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsCountAggregateInputType = {
    comment_id?: true
    content?: true
    userId?: true
    imageId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    comment_id: number
    content: string
    userId: number
    imageId: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    content?: boolean
    userId?: boolean
    imageId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Images?: boolean | ImagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>



  export type CommentsSelectScalar = {
    comment_id?: boolean
    content?: boolean
    userId?: boolean
    imageId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "content" | "userId" | "imageId" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Images?: boolean | ImagesDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Images: Prisma.$ImagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_id: number
      content: string
      userId: number
      imageId: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Images<T extends ImagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImagesDefaultArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly comment_id: FieldRef<"Comments", 'Int'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly userId: FieldRef<"Comments", 'Int'>
    readonly imageId: FieldRef<"Comments", 'Int'>
    readonly isDeleted: FieldRef<"Comments", 'Boolean'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly updatedAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model SaveImages
   */

  export type AggregateSaveImages = {
    _count: SaveImagesCountAggregateOutputType | null
    _avg: SaveImagesAvgAggregateOutputType | null
    _sum: SaveImagesSumAggregateOutputType | null
    _min: SaveImagesMinAggregateOutputType | null
    _max: SaveImagesMaxAggregateOutputType | null
  }

  export type SaveImagesAvgAggregateOutputType = {
    userId: number | null
    imageId: number | null
  }

  export type SaveImagesSumAggregateOutputType = {
    userId: number | null
    imageId: number | null
  }

  export type SaveImagesMinAggregateOutputType = {
    userId: number | null
    imageId: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaveImagesMaxAggregateOutputType = {
    userId: number | null
    imageId: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaveImagesCountAggregateOutputType = {
    userId: number
    imageId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SaveImagesAvgAggregateInputType = {
    userId?: true
    imageId?: true
  }

  export type SaveImagesSumAggregateInputType = {
    userId?: true
    imageId?: true
  }

  export type SaveImagesMinAggregateInputType = {
    userId?: true
    imageId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaveImagesMaxAggregateInputType = {
    userId?: true
    imageId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaveImagesCountAggregateInputType = {
    userId?: true
    imageId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SaveImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaveImages to aggregate.
     */
    where?: SaveImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaveImages to fetch.
     */
    orderBy?: SaveImagesOrderByWithRelationInput | SaveImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaveImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaveImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaveImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaveImages
    **/
    _count?: true | SaveImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaveImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaveImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaveImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaveImagesMaxAggregateInputType
  }

  export type GetSaveImagesAggregateType<T extends SaveImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateSaveImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaveImages[P]>
      : GetScalarType<T[P], AggregateSaveImages[P]>
  }




  export type SaveImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveImagesWhereInput
    orderBy?: SaveImagesOrderByWithAggregationInput | SaveImagesOrderByWithAggregationInput[]
    by: SaveImagesScalarFieldEnum[] | SaveImagesScalarFieldEnum
    having?: SaveImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaveImagesCountAggregateInputType | true
    _avg?: SaveImagesAvgAggregateInputType
    _sum?: SaveImagesSumAggregateInputType
    _min?: SaveImagesMinAggregateInputType
    _max?: SaveImagesMaxAggregateInputType
  }

  export type SaveImagesGroupByOutputType = {
    userId: number
    imageId: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: SaveImagesCountAggregateOutputType | null
    _avg: SaveImagesAvgAggregateOutputType | null
    _sum: SaveImagesSumAggregateOutputType | null
    _min: SaveImagesMinAggregateOutputType | null
    _max: SaveImagesMaxAggregateOutputType | null
  }

  type GetSaveImagesGroupByPayload<T extends SaveImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaveImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaveImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaveImagesGroupByOutputType[P]>
            : GetScalarType<T[P], SaveImagesGroupByOutputType[P]>
        }
      >
    >


  export type SaveImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    imageId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Images?: boolean | ImagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saveImages"]>



  export type SaveImagesSelectScalar = {
    userId?: boolean
    imageId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SaveImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "imageId" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["saveImages"]>
  export type SaveImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Images?: boolean | ImagesDefaultArgs<ExtArgs>
  }

  export type $SaveImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaveImages"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Images: Prisma.$ImagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      imageId: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["saveImages"]>
    composites: {}
  }

  type SaveImagesGetPayload<S extends boolean | null | undefined | SaveImagesDefaultArgs> = $Result.GetResult<Prisma.$SaveImagesPayload, S>

  type SaveImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaveImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaveImagesCountAggregateInputType | true
    }

  export interface SaveImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaveImages'], meta: { name: 'SaveImages' } }
    /**
     * Find zero or one SaveImages that matches the filter.
     * @param {SaveImagesFindUniqueArgs} args - Arguments to find a SaveImages
     * @example
     * // Get one SaveImages
     * const saveImages = await prisma.saveImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaveImagesFindUniqueArgs>(args: SelectSubset<T, SaveImagesFindUniqueArgs<ExtArgs>>): Prisma__SaveImagesClient<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaveImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaveImagesFindUniqueOrThrowArgs} args - Arguments to find a SaveImages
     * @example
     * // Get one SaveImages
     * const saveImages = await prisma.saveImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaveImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, SaveImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaveImagesClient<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaveImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveImagesFindFirstArgs} args - Arguments to find a SaveImages
     * @example
     * // Get one SaveImages
     * const saveImages = await prisma.saveImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaveImagesFindFirstArgs>(args?: SelectSubset<T, SaveImagesFindFirstArgs<ExtArgs>>): Prisma__SaveImagesClient<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaveImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveImagesFindFirstOrThrowArgs} args - Arguments to find a SaveImages
     * @example
     * // Get one SaveImages
     * const saveImages = await prisma.saveImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaveImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, SaveImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaveImagesClient<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaveImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaveImages
     * const saveImages = await prisma.saveImages.findMany()
     * 
     * // Get first 10 SaveImages
     * const saveImages = await prisma.saveImages.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const saveImagesWithUserIdOnly = await prisma.saveImages.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends SaveImagesFindManyArgs>(args?: SelectSubset<T, SaveImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaveImages.
     * @param {SaveImagesCreateArgs} args - Arguments to create a SaveImages.
     * @example
     * // Create one SaveImages
     * const SaveImages = await prisma.saveImages.create({
     *   data: {
     *     // ... data to create a SaveImages
     *   }
     * })
     * 
     */
    create<T extends SaveImagesCreateArgs>(args: SelectSubset<T, SaveImagesCreateArgs<ExtArgs>>): Prisma__SaveImagesClient<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaveImages.
     * @param {SaveImagesCreateManyArgs} args - Arguments to create many SaveImages.
     * @example
     * // Create many SaveImages
     * const saveImages = await prisma.saveImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaveImagesCreateManyArgs>(args?: SelectSubset<T, SaveImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SaveImages.
     * @param {SaveImagesDeleteArgs} args - Arguments to delete one SaveImages.
     * @example
     * // Delete one SaveImages
     * const SaveImages = await prisma.saveImages.delete({
     *   where: {
     *     // ... filter to delete one SaveImages
     *   }
     * })
     * 
     */
    delete<T extends SaveImagesDeleteArgs>(args: SelectSubset<T, SaveImagesDeleteArgs<ExtArgs>>): Prisma__SaveImagesClient<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaveImages.
     * @param {SaveImagesUpdateArgs} args - Arguments to update one SaveImages.
     * @example
     * // Update one SaveImages
     * const saveImages = await prisma.saveImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaveImagesUpdateArgs>(args: SelectSubset<T, SaveImagesUpdateArgs<ExtArgs>>): Prisma__SaveImagesClient<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaveImages.
     * @param {SaveImagesDeleteManyArgs} args - Arguments to filter SaveImages to delete.
     * @example
     * // Delete a few SaveImages
     * const { count } = await prisma.saveImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaveImagesDeleteManyArgs>(args?: SelectSubset<T, SaveImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaveImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaveImages
     * const saveImages = await prisma.saveImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaveImagesUpdateManyArgs>(args: SelectSubset<T, SaveImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SaveImages.
     * @param {SaveImagesUpsertArgs} args - Arguments to update or create a SaveImages.
     * @example
     * // Update or create a SaveImages
     * const saveImages = await prisma.saveImages.upsert({
     *   create: {
     *     // ... data to create a SaveImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaveImages we want to update
     *   }
     * })
     */
    upsert<T extends SaveImagesUpsertArgs>(args: SelectSubset<T, SaveImagesUpsertArgs<ExtArgs>>): Prisma__SaveImagesClient<$Result.GetResult<Prisma.$SaveImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaveImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveImagesCountArgs} args - Arguments to filter SaveImages to count.
     * @example
     * // Count the number of SaveImages
     * const count = await prisma.saveImages.count({
     *   where: {
     *     // ... the filter for the SaveImages we want to count
     *   }
     * })
    **/
    count<T extends SaveImagesCountArgs>(
      args?: Subset<T, SaveImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaveImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaveImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaveImagesAggregateArgs>(args: Subset<T, SaveImagesAggregateArgs>): Prisma.PrismaPromise<GetSaveImagesAggregateType<T>>

    /**
     * Group by SaveImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveImagesGroupByArgs} args - Group by arguments.
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
      T extends SaveImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaveImagesGroupByArgs['orderBy'] }
        : { orderBy?: SaveImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaveImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaveImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaveImages model
   */
  readonly fields: SaveImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaveImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaveImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Images<T extends ImagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImagesDefaultArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SaveImages model
   */
  interface SaveImagesFieldRefs {
    readonly userId: FieldRef<"SaveImages", 'Int'>
    readonly imageId: FieldRef<"SaveImages", 'Int'>
    readonly isDeleted: FieldRef<"SaveImages", 'Boolean'>
    readonly createdAt: FieldRef<"SaveImages", 'DateTime'>
    readonly updatedAt: FieldRef<"SaveImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SaveImages findUnique
   */
  export type SaveImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * Filter, which SaveImages to fetch.
     */
    where: SaveImagesWhereUniqueInput
  }

  /**
   * SaveImages findUniqueOrThrow
   */
  export type SaveImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * Filter, which SaveImages to fetch.
     */
    where: SaveImagesWhereUniqueInput
  }

  /**
   * SaveImages findFirst
   */
  export type SaveImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * Filter, which SaveImages to fetch.
     */
    where?: SaveImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaveImages to fetch.
     */
    orderBy?: SaveImagesOrderByWithRelationInput | SaveImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaveImages.
     */
    cursor?: SaveImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaveImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaveImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaveImages.
     */
    distinct?: SaveImagesScalarFieldEnum | SaveImagesScalarFieldEnum[]
  }

  /**
   * SaveImages findFirstOrThrow
   */
  export type SaveImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * Filter, which SaveImages to fetch.
     */
    where?: SaveImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaveImages to fetch.
     */
    orderBy?: SaveImagesOrderByWithRelationInput | SaveImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaveImages.
     */
    cursor?: SaveImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaveImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaveImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaveImages.
     */
    distinct?: SaveImagesScalarFieldEnum | SaveImagesScalarFieldEnum[]
  }

  /**
   * SaveImages findMany
   */
  export type SaveImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * Filter, which SaveImages to fetch.
     */
    where?: SaveImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaveImages to fetch.
     */
    orderBy?: SaveImagesOrderByWithRelationInput | SaveImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaveImages.
     */
    cursor?: SaveImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaveImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaveImages.
     */
    skip?: number
    distinct?: SaveImagesScalarFieldEnum | SaveImagesScalarFieldEnum[]
  }

  /**
   * SaveImages create
   */
  export type SaveImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a SaveImages.
     */
    data: XOR<SaveImagesCreateInput, SaveImagesUncheckedCreateInput>
  }

  /**
   * SaveImages createMany
   */
  export type SaveImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaveImages.
     */
    data: SaveImagesCreateManyInput | SaveImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaveImages update
   */
  export type SaveImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a SaveImages.
     */
    data: XOR<SaveImagesUpdateInput, SaveImagesUncheckedUpdateInput>
    /**
     * Choose, which SaveImages to update.
     */
    where: SaveImagesWhereUniqueInput
  }

  /**
   * SaveImages updateMany
   */
  export type SaveImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaveImages.
     */
    data: XOR<SaveImagesUpdateManyMutationInput, SaveImagesUncheckedUpdateManyInput>
    /**
     * Filter which SaveImages to update
     */
    where?: SaveImagesWhereInput
    /**
     * Limit how many SaveImages to update.
     */
    limit?: number
  }

  /**
   * SaveImages upsert
   */
  export type SaveImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the SaveImages to update in case it exists.
     */
    where: SaveImagesWhereUniqueInput
    /**
     * In case the SaveImages found by the `where` argument doesn't exist, create a new SaveImages with this data.
     */
    create: XOR<SaveImagesCreateInput, SaveImagesUncheckedCreateInput>
    /**
     * In case the SaveImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaveImagesUpdateInput, SaveImagesUncheckedUpdateInput>
  }

  /**
   * SaveImages delete
   */
  export type SaveImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
    /**
     * Filter which SaveImages to delete.
     */
    where: SaveImagesWhereUniqueInput
  }

  /**
   * SaveImages deleteMany
   */
  export type SaveImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaveImages to delete
     */
    where?: SaveImagesWhereInput
    /**
     * Limit how many SaveImages to delete.
     */
    limit?: number
  }

  /**
   * SaveImages without action
   */
  export type SaveImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveImages
     */
    select?: SaveImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveImages
     */
    omit?: SaveImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveImagesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    age: 'age',
    avatar: 'avatar',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    image_id: 'image_id',
    image_name: 'image_name',
    image_url: 'image_url',
    image_description: 'image_description',
    userId: 'userId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    comment_id: 'comment_id',
    content: 'content',
    userId: 'userId',
    imageId: 'imageId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const SaveImagesScalarFieldEnum: {
    userId: 'userId',
    imageId: 'imageId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SaveImagesScalarFieldEnum = (typeof SaveImagesScalarFieldEnum)[keyof typeof SaveImagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    avatar: 'avatar'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const ImagesOrderByRelevanceFieldEnum: {
    image_name: 'image_name',
    image_url: 'image_url',
    image_description: 'image_description'
  };

  export type ImagesOrderByRelevanceFieldEnum = (typeof ImagesOrderByRelevanceFieldEnum)[keyof typeof ImagesOrderByRelevanceFieldEnum]


  export const CommentsOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type CommentsOrderByRelevanceFieldEnum = (typeof CommentsOrderByRelevanceFieldEnum)[keyof typeof CommentsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    age?: IntNullableFilter<"Users"> | number | null
    avatar?: StringNullableFilter<"Users"> | string | null
    isDeleted?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Images?: ImagesListRelationFilter
    Comments?: CommentsListRelationFilter
    SaveImages?: SaveImagesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Images?: ImagesOrderByRelationAggregateInput
    Comments?: CommentsOrderByRelationAggregateInput
    SaveImages?: SaveImagesOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    age?: IntNullableFilter<"Users"> | number | null
    avatar?: StringNullableFilter<"Users"> | string | null
    isDeleted?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Images?: ImagesListRelationFilter
    Comments?: CommentsListRelationFilter
    SaveImages?: SaveImagesListRelationFilter
  }, "user_id" | "email">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    age?: IntNullableWithAggregatesFilter<"Users"> | number | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    image_id?: IntFilter<"Images"> | number
    image_name?: StringFilter<"Images"> | string
    image_url?: StringFilter<"Images"> | string
    image_description?: StringNullableFilter<"Images"> | string | null
    userId?: IntFilter<"Images"> | number
    isDeleted?: BoolFilter<"Images"> | boolean
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Comments?: CommentsListRelationFilter
    SaveImages?: SaveImagesListRelationFilter
  }

  export type ImagesOrderByWithRelationInput = {
    image_id?: SortOrder
    image_name?: SortOrder
    image_url?: SortOrder
    image_description?: SortOrderInput | SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Comments?: CommentsOrderByRelationAggregateInput
    SaveImages?: SaveImagesOrderByRelationAggregateInput
    _relevance?: ImagesOrderByRelevanceInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    image_id?: number
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    image_name?: StringFilter<"Images"> | string
    image_url?: StringFilter<"Images"> | string
    image_description?: StringNullableFilter<"Images"> | string | null
    userId?: IntFilter<"Images"> | number
    isDeleted?: BoolFilter<"Images"> | boolean
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Comments?: CommentsListRelationFilter
    SaveImages?: SaveImagesListRelationFilter
  }, "image_id">

  export type ImagesOrderByWithAggregationInput = {
    image_id?: SortOrder
    image_name?: SortOrder
    image_url?: SortOrder
    image_description?: SortOrderInput | SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    image_id?: IntWithAggregatesFilter<"Images"> | number
    image_name?: StringWithAggregatesFilter<"Images"> | string
    image_url?: StringWithAggregatesFilter<"Images"> | string
    image_description?: StringNullableWithAggregatesFilter<"Images"> | string | null
    userId?: IntWithAggregatesFilter<"Images"> | number
    isDeleted?: BoolWithAggregatesFilter<"Images"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    comment_id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    userId?: IntFilter<"Comments"> | number
    imageId?: IntFilter<"Comments"> | number
    isDeleted?: BoolFilter<"Comments"> | boolean
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Images?: XOR<ImagesScalarRelationFilter, ImagesWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Images?: ImagesOrderByWithRelationInput
    _relevance?: CommentsOrderByRelevanceInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    content?: StringFilter<"Comments"> | string
    userId?: IntFilter<"Comments"> | number
    imageId?: IntFilter<"Comments"> | number
    isDeleted?: BoolFilter<"Comments"> | boolean
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Images?: XOR<ImagesScalarRelationFilter, ImagesWhereInput>
  }, "comment_id">

  export type CommentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    comment_id?: IntWithAggregatesFilter<"Comments"> | number
    content?: StringWithAggregatesFilter<"Comments"> | string
    userId?: IntWithAggregatesFilter<"Comments"> | number
    imageId?: IntWithAggregatesFilter<"Comments"> | number
    isDeleted?: BoolWithAggregatesFilter<"Comments"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type SaveImagesWhereInput = {
    AND?: SaveImagesWhereInput | SaveImagesWhereInput[]
    OR?: SaveImagesWhereInput[]
    NOT?: SaveImagesWhereInput | SaveImagesWhereInput[]
    userId?: IntFilter<"SaveImages"> | number
    imageId?: IntFilter<"SaveImages"> | number
    isDeleted?: BoolFilter<"SaveImages"> | boolean
    createdAt?: DateTimeFilter<"SaveImages"> | Date | string
    updatedAt?: DateTimeFilter<"SaveImages"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Images?: XOR<ImagesScalarRelationFilter, ImagesWhereInput>
  }

  export type SaveImagesOrderByWithRelationInput = {
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Images?: ImagesOrderByWithRelationInput
  }

  export type SaveImagesWhereUniqueInput = Prisma.AtLeast<{
    userId_imageId?: SaveImagesUserIdImageIdCompoundUniqueInput
    AND?: SaveImagesWhereInput | SaveImagesWhereInput[]
    OR?: SaveImagesWhereInput[]
    NOT?: SaveImagesWhereInput | SaveImagesWhereInput[]
    userId?: IntFilter<"SaveImages"> | number
    imageId?: IntFilter<"SaveImages"> | number
    isDeleted?: BoolFilter<"SaveImages"> | boolean
    createdAt?: DateTimeFilter<"SaveImages"> | Date | string
    updatedAt?: DateTimeFilter<"SaveImages"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Images?: XOR<ImagesScalarRelationFilter, ImagesWhereInput>
  }, "userId_imageId">

  export type SaveImagesOrderByWithAggregationInput = {
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SaveImagesCountOrderByAggregateInput
    _avg?: SaveImagesAvgOrderByAggregateInput
    _max?: SaveImagesMaxOrderByAggregateInput
    _min?: SaveImagesMinOrderByAggregateInput
    _sum?: SaveImagesSumOrderByAggregateInput
  }

  export type SaveImagesScalarWhereWithAggregatesInput = {
    AND?: SaveImagesScalarWhereWithAggregatesInput | SaveImagesScalarWhereWithAggregatesInput[]
    OR?: SaveImagesScalarWhereWithAggregatesInput[]
    NOT?: SaveImagesScalarWhereWithAggregatesInput | SaveImagesScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"SaveImages"> | number
    imageId?: IntWithAggregatesFilter<"SaveImages"> | number
    isDeleted?: BoolWithAggregatesFilter<"SaveImages"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SaveImages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SaveImages"> | Date | string
  }

  export type UsersCreateInput = {
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Images?: ImagesCreateNestedManyWithoutUsersInput
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    SaveImages?: SaveImagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: number
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Images?: ImagesUncheckedCreateNestedManyWithoutUsersInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    SaveImages?: SaveImagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImagesUpdateManyWithoutUsersNestedInput
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    SaveImages?: SaveImagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImagesUncheckedUpdateManyWithoutUsersNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    SaveImages?: SaveImagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    user_id?: number
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateInput = {
    image_name: string
    image_url: string
    image_description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutImagesInput
    Comments?: CommentsCreateNestedManyWithoutImagesInput
    SaveImages?: SaveImagesCreateNestedManyWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    image_id?: number
    image_name: string
    image_url: string
    image_description?: string | null
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutImagesInput
    SaveImages?: SaveImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImagesUpdateInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutImagesNestedInput
    Comments?: CommentsUpdateManyWithoutImagesNestedInput
    SaveImages?: SaveImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutImagesNestedInput
    SaveImages?: SaveImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImagesCreateManyInput = {
    image_id?: number
    image_name: string
    image_url: string
    image_description?: string | null
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateManyMutationInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    content: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutCommentsInput
    Images: ImagesCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    comment_id?: number
    content: string
    userId: number
    imageId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    Images?: ImagesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyInput = {
    comment_id?: number
    content: string
    userId: number
    imageId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveImagesCreateInput = {
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutSaveImagesInput
    Images: ImagesCreateNestedOneWithoutSaveImagesInput
  }

  export type SaveImagesUncheckedCreateInput = {
    userId: number
    imageId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaveImagesUpdateInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutSaveImagesNestedInput
    Images?: ImagesUpdateOneRequiredWithoutSaveImagesNestedInput
  }

  export type SaveImagesUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveImagesCreateManyInput = {
    userId: number
    imageId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaveImagesUpdateManyMutationInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveImagesUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type SaveImagesListRelationFilter = {
    every?: SaveImagesWhereInput
    some?: SaveImagesWhereInput
    none?: SaveImagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaveImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    age?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    user_id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ImagesOrderByRelevanceInput = {
    fields: ImagesOrderByRelevanceFieldEnum | ImagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImagesCountOrderByAggregateInput = {
    image_id?: SortOrder
    image_name?: SortOrder
    image_url?: SortOrder
    image_description?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    image_id?: SortOrder
    userId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    image_id?: SortOrder
    image_name?: SortOrder
    image_url?: SortOrder
    image_description?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    image_id?: SortOrder
    image_name?: SortOrder
    image_url?: SortOrder
    image_description?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    image_id?: SortOrder
    userId?: SortOrder
  }

  export type ImagesScalarRelationFilter = {
    is?: ImagesWhereInput
    isNot?: ImagesWhereInput
  }

  export type CommentsOrderByRelevanceInput = {
    fields: CommentsOrderByRelevanceFieldEnum | CommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    comment_id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    comment_id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type SaveImagesUserIdImageIdCompoundUniqueInput = {
    userId: number
    imageId: number
  }

  export type SaveImagesCountOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaveImagesAvgOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type SaveImagesMaxOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaveImagesMinOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaveImagesSumOrderByAggregateInput = {
    userId?: SortOrder
    imageId?: SortOrder
  }

  export type ImagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput> | ImagesCreateWithoutUsersInput[] | ImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUsersInput | ImagesCreateOrConnectWithoutUsersInput[]
    createMany?: ImagesCreateManyUsersInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SaveImagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<SaveImagesCreateWithoutUsersInput, SaveImagesUncheckedCreateWithoutUsersInput> | SaveImagesCreateWithoutUsersInput[] | SaveImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SaveImagesCreateOrConnectWithoutUsersInput | SaveImagesCreateOrConnectWithoutUsersInput[]
    createMany?: SaveImagesCreateManyUsersInputEnvelope
    connect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput> | ImagesCreateWithoutUsersInput[] | ImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUsersInput | ImagesCreateOrConnectWithoutUsersInput[]
    createMany?: ImagesCreateManyUsersInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SaveImagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<SaveImagesCreateWithoutUsersInput, SaveImagesUncheckedCreateWithoutUsersInput> | SaveImagesCreateWithoutUsersInput[] | SaveImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SaveImagesCreateOrConnectWithoutUsersInput | SaveImagesCreateOrConnectWithoutUsersInput[]
    createMany?: SaveImagesCreateManyUsersInputEnvelope
    connect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput> | ImagesCreateWithoutUsersInput[] | ImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUsersInput | ImagesCreateOrConnectWithoutUsersInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutUsersInput | ImagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ImagesCreateManyUsersInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutUsersInput | ImagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutUsersInput | ImagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SaveImagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SaveImagesCreateWithoutUsersInput, SaveImagesUncheckedCreateWithoutUsersInput> | SaveImagesCreateWithoutUsersInput[] | SaveImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SaveImagesCreateOrConnectWithoutUsersInput | SaveImagesCreateOrConnectWithoutUsersInput[]
    upsert?: SaveImagesUpsertWithWhereUniqueWithoutUsersInput | SaveImagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: SaveImagesCreateManyUsersInputEnvelope
    set?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    disconnect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    delete?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    connect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    update?: SaveImagesUpdateWithWhereUniqueWithoutUsersInput | SaveImagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SaveImagesUpdateManyWithWhereWithoutUsersInput | SaveImagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SaveImagesScalarWhereInput | SaveImagesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput> | ImagesCreateWithoutUsersInput[] | ImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUsersInput | ImagesCreateOrConnectWithoutUsersInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutUsersInput | ImagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ImagesCreateManyUsersInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutUsersInput | ImagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutUsersInput | ImagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SaveImagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SaveImagesCreateWithoutUsersInput, SaveImagesUncheckedCreateWithoutUsersInput> | SaveImagesCreateWithoutUsersInput[] | SaveImagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SaveImagesCreateOrConnectWithoutUsersInput | SaveImagesCreateOrConnectWithoutUsersInput[]
    upsert?: SaveImagesUpsertWithWhereUniqueWithoutUsersInput | SaveImagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: SaveImagesCreateManyUsersInputEnvelope
    set?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    disconnect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    delete?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    connect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    update?: SaveImagesUpdateWithWhereUniqueWithoutUsersInput | SaveImagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SaveImagesUpdateManyWithWhereWithoutUsersInput | SaveImagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SaveImagesScalarWhereInput | SaveImagesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutImagesInput = {
    create?: XOR<UsersCreateWithoutImagesInput, UsersUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutImagesInput
    connect?: UsersWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutImagesInput = {
    create?: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput> | CommentsCreateWithoutImagesInput[] | CommentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutImagesInput | CommentsCreateOrConnectWithoutImagesInput[]
    createMany?: CommentsCreateManyImagesInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SaveImagesCreateNestedManyWithoutImagesInput = {
    create?: XOR<SaveImagesCreateWithoutImagesInput, SaveImagesUncheckedCreateWithoutImagesInput> | SaveImagesCreateWithoutImagesInput[] | SaveImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: SaveImagesCreateOrConnectWithoutImagesInput | SaveImagesCreateOrConnectWithoutImagesInput[]
    createMany?: SaveImagesCreateManyImagesInputEnvelope
    connect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput> | CommentsCreateWithoutImagesInput[] | CommentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutImagesInput | CommentsCreateOrConnectWithoutImagesInput[]
    createMany?: CommentsCreateManyImagesInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SaveImagesUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<SaveImagesCreateWithoutImagesInput, SaveImagesUncheckedCreateWithoutImagesInput> | SaveImagesCreateWithoutImagesInput[] | SaveImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: SaveImagesCreateOrConnectWithoutImagesInput | SaveImagesCreateOrConnectWithoutImagesInput[]
    createMany?: SaveImagesCreateManyImagesInputEnvelope
    connect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<UsersCreateWithoutImagesInput, UsersUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutImagesInput
    upsert?: UsersUpsertWithoutImagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutImagesInput, UsersUpdateWithoutImagesInput>, UsersUncheckedUpdateWithoutImagesInput>
  }

  export type CommentsUpdateManyWithoutImagesNestedInput = {
    create?: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput> | CommentsCreateWithoutImagesInput[] | CommentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutImagesInput | CommentsCreateOrConnectWithoutImagesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutImagesInput | CommentsUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: CommentsCreateManyImagesInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutImagesInput | CommentsUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutImagesInput | CommentsUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SaveImagesUpdateManyWithoutImagesNestedInput = {
    create?: XOR<SaveImagesCreateWithoutImagesInput, SaveImagesUncheckedCreateWithoutImagesInput> | SaveImagesCreateWithoutImagesInput[] | SaveImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: SaveImagesCreateOrConnectWithoutImagesInput | SaveImagesCreateOrConnectWithoutImagesInput[]
    upsert?: SaveImagesUpsertWithWhereUniqueWithoutImagesInput | SaveImagesUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: SaveImagesCreateManyImagesInputEnvelope
    set?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    disconnect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    delete?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    connect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    update?: SaveImagesUpdateWithWhereUniqueWithoutImagesInput | SaveImagesUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: SaveImagesUpdateManyWithWhereWithoutImagesInput | SaveImagesUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: SaveImagesScalarWhereInput | SaveImagesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput> | CommentsCreateWithoutImagesInput[] | CommentsUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutImagesInput | CommentsCreateOrConnectWithoutImagesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutImagesInput | CommentsUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: CommentsCreateManyImagesInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutImagesInput | CommentsUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutImagesInput | CommentsUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SaveImagesUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<SaveImagesCreateWithoutImagesInput, SaveImagesUncheckedCreateWithoutImagesInput> | SaveImagesCreateWithoutImagesInput[] | SaveImagesUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: SaveImagesCreateOrConnectWithoutImagesInput | SaveImagesCreateOrConnectWithoutImagesInput[]
    upsert?: SaveImagesUpsertWithWhereUniqueWithoutImagesInput | SaveImagesUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: SaveImagesCreateManyImagesInputEnvelope
    set?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    disconnect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    delete?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    connect?: SaveImagesWhereUniqueInput | SaveImagesWhereUniqueInput[]
    update?: SaveImagesUpdateWithWhereUniqueWithoutImagesInput | SaveImagesUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: SaveImagesUpdateManyWithWhereWithoutImagesInput | SaveImagesUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: SaveImagesScalarWhereInput | SaveImagesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type ImagesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ImagesCreateWithoutCommentsInput, ImagesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutCommentsInput
    connect?: ImagesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type ImagesUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ImagesCreateWithoutCommentsInput, ImagesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutCommentsInput
    upsert?: ImagesUpsertWithoutCommentsInput
    connect?: ImagesWhereUniqueInput
    update?: XOR<XOR<ImagesUpdateToOneWithWhereWithoutCommentsInput, ImagesUpdateWithoutCommentsInput>, ImagesUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersCreateNestedOneWithoutSaveImagesInput = {
    create?: XOR<UsersCreateWithoutSaveImagesInput, UsersUncheckedCreateWithoutSaveImagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSaveImagesInput
    connect?: UsersWhereUniqueInput
  }

  export type ImagesCreateNestedOneWithoutSaveImagesInput = {
    create?: XOR<ImagesCreateWithoutSaveImagesInput, ImagesUncheckedCreateWithoutSaveImagesInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutSaveImagesInput
    connect?: ImagesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutSaveImagesNestedInput = {
    create?: XOR<UsersCreateWithoutSaveImagesInput, UsersUncheckedCreateWithoutSaveImagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSaveImagesInput
    upsert?: UsersUpsertWithoutSaveImagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSaveImagesInput, UsersUpdateWithoutSaveImagesInput>, UsersUncheckedUpdateWithoutSaveImagesInput>
  }

  export type ImagesUpdateOneRequiredWithoutSaveImagesNestedInput = {
    create?: XOR<ImagesCreateWithoutSaveImagesInput, ImagesUncheckedCreateWithoutSaveImagesInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutSaveImagesInput
    upsert?: ImagesUpsertWithoutSaveImagesInput
    connect?: ImagesWhereUniqueInput
    update?: XOR<XOR<ImagesUpdateToOneWithWhereWithoutSaveImagesInput, ImagesUpdateWithoutSaveImagesInput>, ImagesUncheckedUpdateWithoutSaveImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ImagesCreateWithoutUsersInput = {
    image_name: string
    image_url: string
    image_description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsCreateNestedManyWithoutImagesInput
    SaveImages?: SaveImagesCreateNestedManyWithoutImagesInput
  }

  export type ImagesUncheckedCreateWithoutUsersInput = {
    image_id?: number
    image_name: string
    image_url: string
    image_description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutImagesInput
    SaveImages?: SaveImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImagesCreateOrConnectWithoutUsersInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput>
  }

  export type ImagesCreateManyUsersInputEnvelope = {
    data: ImagesCreateManyUsersInput | ImagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUsersInput = {
    content: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Images: ImagesCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUsersInput = {
    comment_id?: number
    content: string
    imageId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsCreateManyUsersInputEnvelope = {
    data: CommentsCreateManyUsersInput | CommentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type SaveImagesCreateWithoutUsersInput = {
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Images: ImagesCreateNestedOneWithoutSaveImagesInput
  }

  export type SaveImagesUncheckedCreateWithoutUsersInput = {
    imageId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaveImagesCreateOrConnectWithoutUsersInput = {
    where: SaveImagesWhereUniqueInput
    create: XOR<SaveImagesCreateWithoutUsersInput, SaveImagesUncheckedCreateWithoutUsersInput>
  }

  export type SaveImagesCreateManyUsersInputEnvelope = {
    data: SaveImagesCreateManyUsersInput | SaveImagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ImagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutUsersInput, ImagesUncheckedUpdateWithoutUsersInput>
    create: XOR<ImagesCreateWithoutUsersInput, ImagesUncheckedCreateWithoutUsersInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutUsersInput, ImagesUncheckedUpdateWithoutUsersInput>
  }

  export type ImagesUpdateManyWithWhereWithoutUsersInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    image_id?: IntFilter<"Images"> | number
    image_name?: StringFilter<"Images"> | string
    image_url?: StringFilter<"Images"> | string
    image_description?: StringNullableFilter<"Images"> | string | null
    userId?: IntFilter<"Images"> | number
    isDeleted?: BoolFilter<"Images"> | boolean
    createdAt?: DateTimeFilter<"Images"> | Date | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUsersInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    comment_id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    userId?: IntFilter<"Comments"> | number
    imageId?: IntFilter<"Comments"> | number
    isDeleted?: BoolFilter<"Comments"> | boolean
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
  }

  export type SaveImagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: SaveImagesWhereUniqueInput
    update: XOR<SaveImagesUpdateWithoutUsersInput, SaveImagesUncheckedUpdateWithoutUsersInput>
    create: XOR<SaveImagesCreateWithoutUsersInput, SaveImagesUncheckedCreateWithoutUsersInput>
  }

  export type SaveImagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: SaveImagesWhereUniqueInput
    data: XOR<SaveImagesUpdateWithoutUsersInput, SaveImagesUncheckedUpdateWithoutUsersInput>
  }

  export type SaveImagesUpdateManyWithWhereWithoutUsersInput = {
    where: SaveImagesScalarWhereInput
    data: XOR<SaveImagesUpdateManyMutationInput, SaveImagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type SaveImagesScalarWhereInput = {
    AND?: SaveImagesScalarWhereInput | SaveImagesScalarWhereInput[]
    OR?: SaveImagesScalarWhereInput[]
    NOT?: SaveImagesScalarWhereInput | SaveImagesScalarWhereInput[]
    userId?: IntFilter<"SaveImages"> | number
    imageId?: IntFilter<"SaveImages"> | number
    isDeleted?: BoolFilter<"SaveImages"> | boolean
    createdAt?: DateTimeFilter<"SaveImages"> | Date | string
    updatedAt?: DateTimeFilter<"SaveImages"> | Date | string
  }

  export type UsersCreateWithoutImagesInput = {
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    SaveImages?: SaveImagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutImagesInput = {
    user_id?: number
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    SaveImages?: SaveImagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutImagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutImagesInput, UsersUncheckedCreateWithoutImagesInput>
  }

  export type CommentsCreateWithoutImagesInput = {
    content: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutImagesInput = {
    comment_id?: number
    content: string
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutImagesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput>
  }

  export type CommentsCreateManyImagesInputEnvelope = {
    data: CommentsCreateManyImagesInput | CommentsCreateManyImagesInput[]
    skipDuplicates?: boolean
  }

  export type SaveImagesCreateWithoutImagesInput = {
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutSaveImagesInput
  }

  export type SaveImagesUncheckedCreateWithoutImagesInput = {
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaveImagesCreateOrConnectWithoutImagesInput = {
    where: SaveImagesWhereUniqueInput
    create: XOR<SaveImagesCreateWithoutImagesInput, SaveImagesUncheckedCreateWithoutImagesInput>
  }

  export type SaveImagesCreateManyImagesInputEnvelope = {
    data: SaveImagesCreateManyImagesInput | SaveImagesCreateManyImagesInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutImagesInput = {
    update: XOR<UsersUpdateWithoutImagesInput, UsersUncheckedUpdateWithoutImagesInput>
    create: XOR<UsersCreateWithoutImagesInput, UsersUncheckedCreateWithoutImagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutImagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutImagesInput, UsersUncheckedUpdateWithoutImagesInput>
  }

  export type UsersUpdateWithoutImagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    SaveImages?: SaveImagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutImagesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    SaveImages?: SaveImagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutImagesInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutImagesInput, CommentsUncheckedUpdateWithoutImagesInput>
    create: XOR<CommentsCreateWithoutImagesInput, CommentsUncheckedCreateWithoutImagesInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutImagesInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutImagesInput, CommentsUncheckedUpdateWithoutImagesInput>
  }

  export type CommentsUpdateManyWithWhereWithoutImagesInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutImagesInput>
  }

  export type SaveImagesUpsertWithWhereUniqueWithoutImagesInput = {
    where: SaveImagesWhereUniqueInput
    update: XOR<SaveImagesUpdateWithoutImagesInput, SaveImagesUncheckedUpdateWithoutImagesInput>
    create: XOR<SaveImagesCreateWithoutImagesInput, SaveImagesUncheckedCreateWithoutImagesInput>
  }

  export type SaveImagesUpdateWithWhereUniqueWithoutImagesInput = {
    where: SaveImagesWhereUniqueInput
    data: XOR<SaveImagesUpdateWithoutImagesInput, SaveImagesUncheckedUpdateWithoutImagesInput>
  }

  export type SaveImagesUpdateManyWithWhereWithoutImagesInput = {
    where: SaveImagesScalarWhereInput
    data: XOR<SaveImagesUpdateManyMutationInput, SaveImagesUncheckedUpdateManyWithoutImagesInput>
  }

  export type UsersCreateWithoutCommentsInput = {
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Images?: ImagesCreateNestedManyWithoutUsersInput
    SaveImages?: SaveImagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    user_id?: number
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Images?: ImagesUncheckedCreateNestedManyWithoutUsersInput
    SaveImages?: SaveImagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type ImagesCreateWithoutCommentsInput = {
    image_name: string
    image_url: string
    image_description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutImagesInput
    SaveImages?: SaveImagesCreateNestedManyWithoutImagesInput
  }

  export type ImagesUncheckedCreateWithoutCommentsInput = {
    image_id?: number
    image_name: string
    image_url: string
    image_description?: string | null
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    SaveImages?: SaveImagesUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImagesCreateOrConnectWithoutCommentsInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutCommentsInput, ImagesUncheckedCreateWithoutCommentsInput>
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImagesUpdateManyWithoutUsersNestedInput
    SaveImages?: SaveImagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImagesUncheckedUpdateManyWithoutUsersNestedInput
    SaveImages?: SaveImagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ImagesUpsertWithoutCommentsInput = {
    update: XOR<ImagesUpdateWithoutCommentsInput, ImagesUncheckedUpdateWithoutCommentsInput>
    create: XOR<ImagesCreateWithoutCommentsInput, ImagesUncheckedCreateWithoutCommentsInput>
    where?: ImagesWhereInput
  }

  export type ImagesUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ImagesWhereInput
    data: XOR<ImagesUpdateWithoutCommentsInput, ImagesUncheckedUpdateWithoutCommentsInput>
  }

  export type ImagesUpdateWithoutCommentsInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutImagesNestedInput
    SaveImages?: SaveImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateWithoutCommentsInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SaveImages?: SaveImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type UsersCreateWithoutSaveImagesInput = {
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Images?: ImagesCreateNestedManyWithoutUsersInput
    Comments?: CommentsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutSaveImagesInput = {
    user_id?: number
    email: string
    password: string
    fullName?: string | null
    age?: number | null
    avatar?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Images?: ImagesUncheckedCreateNestedManyWithoutUsersInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutSaveImagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSaveImagesInput, UsersUncheckedCreateWithoutSaveImagesInput>
  }

  export type ImagesCreateWithoutSaveImagesInput = {
    image_name: string
    image_url: string
    image_description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutImagesInput
    Comments?: CommentsCreateNestedManyWithoutImagesInput
  }

  export type ImagesUncheckedCreateWithoutSaveImagesInput = {
    image_id?: number
    image_name: string
    image_url: string
    image_description?: string | null
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImagesCreateOrConnectWithoutSaveImagesInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutSaveImagesInput, ImagesUncheckedCreateWithoutSaveImagesInput>
  }

  export type UsersUpsertWithoutSaveImagesInput = {
    update: XOR<UsersUpdateWithoutSaveImagesInput, UsersUncheckedUpdateWithoutSaveImagesInput>
    create: XOR<UsersCreateWithoutSaveImagesInput, UsersUncheckedCreateWithoutSaveImagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSaveImagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSaveImagesInput, UsersUncheckedUpdateWithoutSaveImagesInput>
  }

  export type UsersUpdateWithoutSaveImagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImagesUpdateManyWithoutUsersNestedInput
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutSaveImagesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImagesUncheckedUpdateManyWithoutUsersNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ImagesUpsertWithoutSaveImagesInput = {
    update: XOR<ImagesUpdateWithoutSaveImagesInput, ImagesUncheckedUpdateWithoutSaveImagesInput>
    create: XOR<ImagesCreateWithoutSaveImagesInput, ImagesUncheckedCreateWithoutSaveImagesInput>
    where?: ImagesWhereInput
  }

  export type ImagesUpdateToOneWithWhereWithoutSaveImagesInput = {
    where?: ImagesWhereInput
    data: XOR<ImagesUpdateWithoutSaveImagesInput, ImagesUncheckedUpdateWithoutSaveImagesInput>
  }

  export type ImagesUpdateWithoutSaveImagesInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutImagesNestedInput
    Comments?: CommentsUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateWithoutSaveImagesInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImagesCreateManyUsersInput = {
    image_id?: number
    image_name: string
    image_url: string
    image_description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateManyUsersInput = {
    comment_id?: number
    content: string
    imageId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaveImagesCreateManyUsersInput = {
    imageId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateWithoutUsersInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUpdateManyWithoutImagesNestedInput
    SaveImages?: SaveImagesUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateWithoutUsersInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutImagesNestedInput
    SaveImages?: SaveImagesUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateManyWithoutUsersInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImagesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUsersInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutUsersInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    imageId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveImagesUpdateWithoutUsersInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImagesUpdateOneRequiredWithoutSaveImagesNestedInput
  }

  export type SaveImagesUncheckedUpdateWithoutUsersInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveImagesUncheckedUpdateManyWithoutUsersInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyImagesInput = {
    comment_id?: number
    content: string
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaveImagesCreateManyImagesInput = {
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateWithoutImagesInput = {
    content?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutImagesInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutImagesInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveImagesUpdateWithoutImagesInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutSaveImagesNestedInput
  }

  export type SaveImagesUncheckedUpdateWithoutImagesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveImagesUncheckedUpdateManyWithoutImagesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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