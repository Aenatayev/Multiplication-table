def print_multiplication_table(n, m):
    # Print header
    print("  ", end="")
    for i in range(1, m+1):
        print(f"{i:4}", end="")
    print()
    
    # Print rows
    for i in range(1, n+1):
        print(f"{i:2}", end="")
        for j in range(1, m+1):
            print(f"{i*j:4}", end="")
        print()

def main():
    while True:
        print("Multiplication Table")
        print("====================")
        n = int(input("Enter the number of rows: "))
        m = int(input("Enter the number of columns: "))
        print_multiplication_table(n, m)
        
        another = input("Do you want to create another table? (y/n): ").strip().lower()
        if another != 'y':
            break

if __name__ == "__main__":
    main()
