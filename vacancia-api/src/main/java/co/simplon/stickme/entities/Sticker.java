package co.simplon.stickme.entities;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

@Entity
@Table(name = "stickers")
public class Sticker extends AbstractEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "price")
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "size_id")
    private Size size;

    @ManyToOne
    @JoinColumn(name = "aspect_id")
    private Aspect aspect;

    @Column(name = "date_added", updatable = false)
    private LocalDate dateAdded;

    public Sticker() {
	// Required no-arg constructor
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public String getDescription() {
	return description;
    }

    public void setDescription(String description) {
	this.description = description;
    }

    public String getImageUrl() {
	return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
	this.imageUrl = imageUrl;
    }

    public BigDecimal getPrice() {
	return price;
    }

    public void setPrice(BigDecimal price) {
	this.price = price;
    }

    public Size getSize() {
	return size;
    }

    public void setSize(Size size) {
	this.size = size;
    }

    public Aspect getAspect() {
	return aspect;
    }

    public void setAspect(Aspect aspect) {
	this.aspect = aspect;
    }

    public LocalDate getDateAdded() {
	return dateAdded;
    }

    private void setDateAdded(LocalDate dateAdded) {
	// Not updatable
	this.dateAdded = dateAdded;
    }

    @PrePersist
    private void dateAdded() {
	setDateAdded(LocalDate.now());
    }

    @Override
    public String toString() {
	return String.format(
		"{id=%s, name=%s, description=%s, imageUrl=%s, "
			+ "price=%s, size=%s, aspect=%s, dateAdded=%s}",
		getId(), name, description, imageUrl, price, size, aspect,
		dateAdded);
    }
}
