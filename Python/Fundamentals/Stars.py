def stars(arr):
    for stars in arr:
        if type(stars) == int:
            print "{}".format("*"*stars)
        else :
            print "{}".format(stars[0].lower()*len(stars))
stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])