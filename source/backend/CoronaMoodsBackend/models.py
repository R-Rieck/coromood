from django.db import models


# Mood Question

class MoodOption(models.Model):  # aka Mood
    image = models.ImageField()
    caption = models.TextField()


class MoodQuestion(models.Model):
    text = models.CharField(max_length=300)
    options = models.ManyToManyField(MoodOption, related_name='questions', on_delete=models.CASCADE)


class MoodAnswer(models.Model):
    option = models.ForeignKey(MoodOption, on_delete=models.CASCADE)
    answer_to = models.ForeignKey(MoodQuestion, related_name='answers', on_delete=models.CASCADE)
    date = models.DateField()

# Slider Question

class SliderOption(models.Model):
    image = models.URLField()
    caption = models.TextField()
    value = models.FloatField()


class SliderQuestion(models.Model):
    text = models.CharField(max_length=300)
    options = models.ManyToManyField(related_name='questions', on_delete=models.CASCADE)


class SliderAnswer(models.Model):
    answer_to = models.ForeignKey(SliderQuestion, related_name='answers')
    option = models.ForeignKey(SliderOption, on_delete=models.CASCADE)
    date = models.DateField()

# Multiple Choice

class MultipleChoiceOption(models.Model):  # aka Tag
    text = models.CharField(max_length=50)


class MultipleChoiceQuestion(object):
    text = models.CharField(max_length=300)
    options = models.ManyToManyField(MultipleChoiceOption, related_name='questions', on_delete=models.CASCADE)


class MultipleChoiceAnswer(models.Model):
    answer_to = models.ForeignKey(MultipleChoiceQuestion, related_name='answers', on_delete=models.CASCADE)
    choices = models.ForeignKey(MultipleChoiceOption, related_name='choices', on_delete=models.CASCADE)
    date = models.DateField()