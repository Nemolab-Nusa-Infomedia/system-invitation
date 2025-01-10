<?php
namespace App\Models\invitation;


use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'category', 'payment_date', 
        'price', 'status', 'payment_method', 'created_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}