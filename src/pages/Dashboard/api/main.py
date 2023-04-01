def calculate_win_rate(buy_points, sell_points, buy_dates, sell_dates):
    total_trades = 0
    winning_trades = 0
    losing_trades = 0
    last_open_position = -1

    while True:
        # Check if there are any more trades to process
        if last_open_position >= min(len(buy_points), len(sell_points)):
            break

        # Get the next buy and sell points
        buy_point = buy_points[last_open_position +
                               1] if last_open_position < len(buy_points)-1 else -1
        sell_point = sell_points[last_open_position +
                                 1] if last_open_position < len(sell_points)-1 else -1

        # Determine whether the trade was a win or a loss
        if buy_point != -1 and sell_point != -1:
            if sell_point > buy_point:
                winning_trades += 1
            else:
                losing_trades += 1
            total_trades += 1
            last_open_position += 1
        elif buy_point != -1:
            last_open_position += 1
        elif sell_point != -1:
            if sell_point > buy_points[last_open_position]:
                winning_trades += 1
            else:
                losing_trades += 1
            total_trades += 1
            last_open_position += 1

    # Check if there is an open position
    if last_open_position < len(buy_points)-1:
        if sell_points[-1] > buy_points[last_open_position]:
            winning_trades += 1
        else:
            losing_trades += 1
        total_trades += 1

    win_rate = winning_trades / total_trades
    return win_rate
# {
#         "sell_dates": ,
#         "buy_dates": ,
#         "sell_points": ,
#         "buy_points":
# }


print(calculate_win_rate(
    [
        3095.825927734375,
        2535.0390625,
        2688.27880859375,
        2639.29931640625,
        2598.067138671875,
        3057.606689453125,
        2343.510986328125,
        2043.170166015625,
        1226.8447265625,
        1553.6849365234375,
        1327.68017578125,
        1330.127685546875,
        1335.65234375,
        1299.464599609375,
        1135.1734619140625,
        1201.5953369140625
    ],
    [
        2927.383544921875,
        3171.69189453125,
        1520.20068359375,
        1445.3834228515625,
        1695.969482421875,
        1703.0250244140625,
        1936.802001953125,
        1713.7652587890625,
        1519.7117919921875,
        1572.2347412109375,
        1556.604248046875,
        1603.10595703125
    ],
    [
        "2022-01-19T00:00:00",
        "2022-01-23T00:00:00",
        "2022-01-31T00:00:00",
        "2022-02-22T00:00:00",
        "2022-02-24T00:00:00",
        "2022-04-18T00:00:00",
        "2022-05-10T00:00:00",
        "2022-05-22T00:00:00",
        "2022-06-24T00:00:00",
        "2022-08-31T00:00:00",
        "2022-09-22T00:00:00",
        "2022-09-27T00:00:00",
        "2022-09-29T00:00:00",
        "2022-11-10T00:00:00",
        "2022-11-22T00:00:00",
        "2022-12-29T00:00:00"
    ],
    [
        "2022-02-11T00:00:00",
        "2022-04-06T00:00:00",
        "2022-07-20T00:00:00",
        "2022-07-25T00:00:00",
        "2022-07-30T00:00:00",
        "2022-08-09T00:00:00",
        "2022-08-14T00:00:00",
        "2022-09-12T00:00:00",
        "2022-11-02T00:00:00",
        "2022-11-06T00:00:00",
        "2023-01-24T00:00:00",
        "2023-01-26T00:00:00"
    ]
))
