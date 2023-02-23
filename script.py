
from enum import Enum
from os import walk
import json

FILE_DESTINATION = "./public/datas.json"


class ProjectType(Enum):
    BOOKS = 'book'
    WORKS = "work"
    MICRO_EDITIONS = "micro-edition"


def convert_string_to_array(string):
    arr = []
    if (string != ""):
        for item in string.split("\n"):
            if item != "":
                arr.append(item)
    return arr


def read_file(file_name):
    try:
        with open(file_name, "r") as file:
            return convert_string_to_array(file.read())
    except:
        return [""]


def create_medias_object(title, medias, path):
    medias_object = []
    for media in medias:
        medias_object.append({
            "id": title.lower().replace(" ", "-")+"-"+media.lower().replace(" ", "-"),
            "url": "/"+path+"/"+title+"/"+media
        })
    return medias_object


def create_background_image(title, medias, path):
    url = ""
    if (medias.count("background.jpg") > 0):
        url = "/"+path+"/"+title+"/background.jpg"
    elif (medias):
        url = "/"+path+"/"+title+"/"+medias[0]
    return {
        "id": title.lower().replace(" ", "-")+"-background",
        "url": url
    }


def create_json(title, medias, path):
    project = {
        "id": title.lower().replace(" ", "-"),
        "name": title,
        "backgroundImage": create_background_image(title, medias, path),
        "description": read_file("./public/"+path+"/"+title+"/description.txt"),
        "type": ProjectType[path.upper().replace("-", "_")].value,
        "date": "2021-01-01",
        "medias": create_medias_object(title, medias, path),
    },
    return project


def write_in_json(data):
    with open(FILE_DESTINATION, "w") as outfile:
        outfile.write(data)


def run_in_foders(file_name):
    res = []
    for (dir_path, dir_names, file_names) in walk(file_name):
        res.append(create_json(dir_path.split("/")[-1], file_names, file_name.split(
            "/")[-1]))
    res.pop(0)
    return merge_array(res)


def merge_array(arr):
    merged_list = []
    for l in arr:
        merged_list += l
    return merged_list


books = './public/books'
works = './public/works'
micro_editions = './public/micro-editions'

datas = []
datas.append(run_in_foders(books))
datas.append(run_in_foders(works))
datas.append(run_in_foders(micro_editions))


write_in_json(json.dumps(merge_array(datas)))
