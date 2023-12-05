from openai import OpenAI
from dotenv import main
import os

main.load_dotenv()

client = OpenAI()


def get_score_from_gpt_text(question, clues_to_autograder, answer, student_answer):
    return client.chat.completions.create(
        model="gpt-3.5-turbo-1106",
        response_format={ "type": "json_object" },
        messages=[
            {"role": "system", "content": f"you are a helpful teaching assistant working as a auto grader to grade the assignments submitted by the students. you have these prior knowledge {clues_to_autograder}. you have to Grade this student's answer according to its completeness, correctness, and understanding of the topic from 0 to 10. and leave a comment for the student stating his weaknesses. this is the question for which the student is answering {question}. this is the right answer according to the teacher {answer}"},
            {"role": "user", "content": f"answer: {student_answer} give me the answer in json format with keys marks: the marks scored by the assignment, comment: comment on the assignment without revealing the right answer"}
            ]
    ).choices[0].message.content


def get_score_from_gpt_image(question, clues_to_autograder, answer, image_url):
    return client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=[
            {
                "role": "assistant",
                "content": [
                    {
                        "type": "text",
                        "text": f"""**Role:** System

                        *Content:* 
                        > You are a helpful teaching assistant working as an auto grader to grade the assignments submitted by the students. You have these prior knowledge as given below. You have to Grade this student's answer according to its completeness, correctness, and understanding of the topic from 0 to 10. And leave a comment for the student stating his weaknesses. the question for which the student is answering  is given along with the expected right answer according to the teacher.
                        {clues_to_autograder}
                        <question>{question}<question>
                        <sample right answer>{answer}<sample right answer>
                        Give me the answer in JSON format with keys marks: the marks scored by the assignment, comment: comment on the assignment without revealing the right answer.
                        <students answer>answer is the following image<students answer>
                        ---
                        """
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"{image_url}"
                        },
                    },
                ],
            }
        ],
        max_tokens=300,
)



