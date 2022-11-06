import datefinder


def getDate(text):
    matches = datefinder.find_dates("todsay is 2000-01-01")

    for match in matches:
        print(match)
