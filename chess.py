ASCII_LOWER_CASE = 96

def ascii_to_cartesian(char):
    return ord(char) - ASCII_LOWER_CASE

def chess_coordinate_to_cartesian(chess_position):
    cartesian_x = ascii_to_cartesian(chess_position[0])
    cartesian_y = int(chess_position[1])
    return (cartesian_x, cartesian_y)

def is_coordinate_black(coord):
    return (coord[0] + coord[1]) % 2 == 0

def is_one_move_away(initial_coord, final_coord):
    delta_x = final_coord[0] - initial_coord[0]
    delta_y = final_coord[1] - initial_coord[1]
    return abs(delta_x) == abs(delta_y)

def bishop(initial_position, final_position, moves):
    if moves < 0:
        return False
    if initial_position == final_position:
        return True
    init_coord = chess_coordinate_to_cartesian(initial_position)
    final_coord = chess_coordinate_to_cartesian(final_position)
    if is_coordinate_black(init_coord) != is_coordinate_black(final_coord):
        return False
    if moves >= 2:
        return True
    else:
        return is_one_move_away(init_coord, final_coord)
