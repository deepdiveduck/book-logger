from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User


class BookLog(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    notes = models.TextField(blank=True)
    date_read = models.DateField(null=True, blank=True)
    rating = models.PositiveSmallIntegerField(null=True, blank=True, validators=[MinValueValidator(1), MaxValueValidator(5)])
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="book_logs")

    def __str__(self):
        return f"{self.title} by {self.author}"
