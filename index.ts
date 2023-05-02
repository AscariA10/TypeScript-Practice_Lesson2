let personAge: number = 50;
let anyname: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
   return 100 + a;
};
let anything: any = -20;
anything = 'Text';
anything = {};

let some: any;
some = 'Text';

let str: string;

str = some;

let person: [string, number] = ['Max', 21];

// enum SetIsLoading {
//    LOADING,
//    READY,
// }

// const loading = SetIsLoading.LOADING;

let combinedVariable: string | number;
combinedVariable = 'hello';
combinedVariable = 38;

let combinedString: 'enable' | 'disable';

combinedString = 'enable';
combinedString = 'disable';

// Function Type

function showMessage(message: string): void {
   console.log(message);
}

function calc(num1: number, num2: number): number {
   return num1 + num2;
}

function customError(): never {
   throw new Error('Error');
}

// Datatype

type PageType = {
   title: string;
   likes: number;
   accounts: string[];
   status: string;
   details?: {
      createAt: string;
      updateAt: string;
   };
};

const page1: PageType = {
   title: 'The awesome page',
   likes: 100,
   accounts: ['Max', 'Anton', 'Nikita'],
   status: 'open',
   details: {
      createAt: '2021-01-01',
      updateAt: '2021-05-01',
   },
};

const page2: PageType = {
   title: 'Python or Js',
   likes: 5,
   accounts: ['Alex'],
   status: 'close',
};
