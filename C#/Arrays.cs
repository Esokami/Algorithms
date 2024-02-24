//Arrays
//Insertsions and Deletions

//Inserting a the End of an Array
int [] intArray = new int[6];

//Make a variable to keep the length because .Lengthis based off of capacity and does not
// track the actual index
int length = 0;

//This adds data for us
for (int i = 0; i < 3; i++)
{
    intArray[length] = i;
    length++;
}

intArray[length] = 8;