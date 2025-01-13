<?php
namespace App\Models\invitation;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvitationList extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'price', 
        'thumbnail', 'category_id', 'created_at'
    ];

    public function tema()
    {
        return $this->belongsTo(InvitationTema::class, 'tema_id');
    }
}