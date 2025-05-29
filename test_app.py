from app import average_age

def test_average_age():
    data = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 40}]
    assert average_age(data) == 35
