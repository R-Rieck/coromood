from rest_framework import serializers

from CoronaMoodsBackend.models import *

# django-rest-framework specific implementation of serializers
# TODO Sync with models

class MoodQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoodQuestion
        fields = ['id', 'text', 'answers']

class SliderQuestionQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderQuestion
        fields = ['id', 'text', 'answers']

class MultipleChoiceQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultipleChoiceQuestion
        fields = ['id', 'text', 'answers']


class MoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mood
        fields = ['id', 'text', 'value']

