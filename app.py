import pandas as pd

def average_age(data):
    df = pd.DataFrame(data)
    return df["age"].mean()
