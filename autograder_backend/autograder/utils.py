from openai import OpenAI
from dotenv import main
import os

main.load_dotenv()

client = OpenAI()


def get_score_from_gpt(question, clues_to_autograder, answer, student_answer):
    return client.chat.completions.create(
        model="gpt-3.5-turbo-1106",
        response_format={ "type": "json_object" },
        messages=[
            {"role": "system", "content": f"you are a helpful teaching assistant working as a auto grader to grade the assignments submitted by the students. you have these prior knowledge {clues_to_autograder}. you have to Grade this student's answer according to its completeness, correctness, and understanding of the topic from 0 to 10. and leave a comment for the student stating his weaknesses. this is the question for which the student is answering {question}. this is the right answer according to the teacher {answer}"},
            {"role": "user", "content": f"answer: {student_answer} give me the answer in json format with keys marks: the marks scored by the assignment, comment: comment on the assignment without revealing the right answer"}
            ]
    ).choices[0].message.content



#     from openai import OpenAI
# import openai

# # Replace with your actual API key
# api_key = "api key"
# client = OpenAI(api_key=api_key)

# # Replace with your actual question
# question = "Write a short note on OOP."

# # Replace with your actual clues to the autograder in JSON format
# clues_to_autograder = {
#     "must be at least this long words": 100,
#     "must include these terms": ["programming", "object", "class"],
#     "must not include inappropriate words": ["don't know"],
# }

# # Replace with the actual student's answer image URL
# student_answer_image_url = "https://raw.githubusercontent.com/thenaivekid/autograder/main/sample%20student%20answer.jpg?token=GHSAT0AAAAAACJ6HTOOXTTITVSN46663QMWZLKVEEA"

# # Create a request to the OpenAI API
# response = client.chat.completions.create(
#     model="gpt-4-vision-preview",
#     messages=[
#         {
#             "role": "assistant",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": f"""**Role:** System

#                     *Content:* 
#                     > You are a helpful teaching assistant working as an auto grader to grade the assignments submitted by the students. You have these prior knowledge as given below. You have to Grade this student's answer according to its completeness, correctness, and understanding of the topic from 0 to 10. And leave a comment for the student stating his weaknesses. the question for which the student is answering  is given along with the expected right answer according to the teacher.
#                     {clues_to_autograder}
#                     <question>{question}<question>
#                     <sample right answer>{answer}<sample right answer>
#                     Give me the answer in JSON format with keys marks: the marks scored by the assignment, comment: comment on the assignment without revealing the right answer.
#                     <students answer>answer is the following image<students answer>
#                     ---
#                     """
#                 },
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": """https://raw.githubusercontent.com/thenaivekid/autograder/main/sample%20student%20answer.jpg?token=GHSAT0AAAAAACJ6HTOOXTTITVSN46663QMWZLKVEEA"""
#                     },
#                 },
#             ],
#         }
#     ],
#     max_tokens=300,
# )

# # Print the response
# print(response.choices[0])

