import random

# Function to generate the maze
def generate_maze(size):
    maze = []
    for _ in range(size):
        maze.append(['#'] * size)  # Initialize maze with walls

    # Place the player at the starting position
    maze[0][0] = 'P'

    # Place the exit at a random position
    exit_x = random.randint(0, size - 1)
    exit_y = random.randint(0, size - 1)
    maze[size - 1][size - 1] = 'E'

    return maze

# Function to print the maze
def print_maze(maze):
    for row in maze:
        print(" ".join(row))

# Function to move the player
def move_player(maze, direction):
    player_x, player_y = find_player(maze)
    size = len(maze)

    if direction == 'up' and player_y > 0:
        if maze[player_y - 1][player_x] != '#':
            maze[player_y][player_x] = ' '
            maze[player_y - 1][player_x] = 'P'
    elif direction == 'down' and player_y < size - 1:
        if maze[player_y + 1][player_x] != '#':
            maze[player_y][player_x] = ' '
            maze[player_y + 1][player_x] = 'P'
    elif direction == 'left' and player_x > 0:
        if maze[player_y][player_x - 1] != '#':
            maze[player_y][player_x] = ' '
            maze[player_y][player_x - 1] = 'P'
    elif direction == 'right' and player_x < size - 1:
        if maze[player_y][player_x + 1] != '#':
            maze[player_y][player_x] = ' '
            maze[player_y][player_x + 1] = 'P'
    else:
        print("Invalid move!")

# Function to find player's position
def find_player(maze):
    for y, row in enumerate(maze):
        for x, cell in enumerate(row):
            if cell == 'P':
                return x, y

# Main function to run the game
def main():
    size = 5  # Size of the maze
    maze = generate_maze(size)
    print("Welcome to the Maze Game!")
    print("Move 'P' to 'E' without hitting the walls '#'.")
    print_maze(maze)

    while True:
        direction = input("Enter direction (up/down/left/right): ").lower()
        move_player(maze, direction)
        print_maze(maze)

        player_x, player_y = find_player(maze)
        if maze[player_y][player_x] == 'E':
            print("Congratulations! You've reached the exit!")
            break

if __name__ == "__main__":
    main()
